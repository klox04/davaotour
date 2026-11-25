type ApiOptions<T> = Omit<NonNullable<Parameters<typeof $fetch<T>>[1]>, 'method' | 'body'>
type ApiBody = Parameters<typeof $fetch>[1]
type RequestBody = NonNullable<ApiBody>['body']
type ApiMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export function useGlobalStore() {
  const config = useRuntimeConfig()
  const apiBase = String(config.public.apiBase || '').trim().replace(/\/+$/, '')

  function request<T>(method: ApiMethod, path: string, options?: ApiOptions<T>, body?: RequestBody) {
    const headers = new Headers(options?.headers as HeadersInit | undefined)
    if (!headers.has('Accept')) headers.set('Accept', 'application/json')

    // Strip caller baseURL/headers so a relative override cannot retarget the
    // Nuxt origin and bypass NUXT_PUBLIC_API_BASE / the Laravel backend.
    const rest = { ...(options ?? {}) } as ApiOptions<T>
    delete rest.baseURL
    delete rest.headers

    return $fetch<T>(path, {
      baseURL: apiBase || '/api/v1',
      credentials: 'include',
      ...rest,
      method,
      headers,
      body,
    })

  }

  function GET_API<T = unknown>(path: string, options?: ApiOptions<T>) {
    return request<T>('GET', path, options)
  }

  function POST_API<T = unknown>(path: string, body?: RequestBody, options?: ApiOptions<T>) {
    return request<T>('POST', path, options, body)
  }

  function PATCH_API<T = unknown>(path: string, body: RequestBody, options?: ApiOptions<T>) {
    return request<T>('PATCH', path, options, body)
  }

  function DELETE_API<T = void>(path: string, options?: ApiOptions<T>) {
    return request<T>('DELETE', path, options)
  }

  return { apiBase, GET_API, POST_API, PATCH_API, DELETE_API }
}
