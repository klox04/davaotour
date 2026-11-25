type Account = { name: string; email: string }
type AuthSession = { user: Account | null; csrfToken: string }

export function useAuthSession() {
  const { GET_API, POST_API } = useGlobalStore()

  const authOptions = {
    credentials: 'include' as const,
    cache: 'no-store' as RequestCache,
  }

  function getSession() {
    return GET_API<AuthSession>('/auth/session', authOptions)
  }

  async function login(credentials: { email: string; password: string }) {
    const { csrfToken } = await getSession()
    return POST_API<AuthSession>('/auth/login', credentials, {
      ...authOptions,
      headers: { 'X-CSRF-TOKEN': csrfToken },
    })
  }

  async function logout() {
    const { csrfToken } = await getSession()
    await POST_API('/auth/logout', undefined, {
      ...authOptions,
      headers: { 'X-CSRF-TOKEN': csrfToken },
    })
  }

  return { getSession, login, logout }
}
