import type { FaqItem, GuideTopic } from '~/types/content'

export const guideTopics: GuideTopic[] = [
  {
    slug: 'how-to-get-to-davao',
    title: 'How to Get to Davao',
    summary: 'Fly into Francisco Bangoy International Airport, or arrive overland from elsewhere in Mindanao.',
    icon: 'lucide:plane',
    paragraphs: [
      'Francisco Bangoy International Airport (DVO) sits roughly 12 kilometers northeast of the city center. Frequent domestic flights connect Davao with Manila, Cebu, and other Philippine cities. The flight from Manila is usually under two hours. Selected international services operate as well; check current schedules before you book.',
      'From the airport, metered taxis and ride-hailing cars cover the ride into town. Agree on the ride-hailing booking in the app, or use the official taxi queue.',
      'Buses link Davao with other Mindanao cities, including General Santos, Cagayan de Oro, and Butuan. Journeys are long, so an overnight bus is common. Ferries serve parts of the island network, but most international visitors arrive by air.',
    ],
  },
  {
    slug: 'transportation',
    title: 'Transportation Guide',
    summary: 'Jeepneys, taxis, ride-hailing, and boats to Samal will cover almost every plan.',
    icon: 'lucide:bus',
    paragraphs: [
      'Inside the city, jeepneys and modern public utility vehicles follow fixed routes and are the everyday way around. Fares are low. Have small bills ready, and say “lugar lang” when you want to hop off.',
      'Taxis and ride-hailing are the comfortable choice with luggage, at night, or when you are heading to Toril, Ma-a, or the hills of Calinan and Malagos. For a full day of destinations, many visitors hire a car and driver.',
      'Samal Island is reached by passenger boat from the Davao coast. The crossing is short. Wharves and schedules can shift, so confirm the departure point on the morning you travel. There is no need to bring a car unless a resort has asked you to.',
    ],
  },
  {
    slug: 'best-time',
    title: 'Best Time to Visit',
    summary: 'December to May is the drier window. August belongs to Kadayawan.',
    icon: 'lucide:calendar-days',
    paragraphs: [
      'The drier months, roughly December through May, are the most comfortable for beaches and for hiking Mount Apo. Trails are less slippery and the gulf is calmer more often than not.',
      'June to November is wetter. Showers are usually part of the day rather than the whole day, and the hills turn a deeper green. Davao lies south of the usual typhoon tracks, so the city is spared many of the storms that cross the northern Philippines. Weather can still disrupt boats and mountain permits.',
      'Kadayawan is held every August, traditionally in the third week. If festivals are the reason for the trip, book rooms early. The city fills up, and the street-dancing parade is worth planning the rest of the week around.',
    ],
  },
  {
    slug: 'essentials',
    title: 'Travel Essentials',
    summary: 'Light clothes, a rain layer, cash for the islands, and a little durian etiquette.',
    icon: 'lucide:backpack',
    paragraphs: [
      'Pack breathable clothing, a light rain jacket, and shoes that can handle a garden path. Evenings in the highlands of Toril and Malagos are cooler than downtown. A modest layer is useful for churches and for some cultural visits.',
      'Philippine pesos are the currency. Cards are widely accepted in the city; smaller eateries, jeepneys, and island crossings prefer cash. English is widely spoken, alongside Cebuano (Bisaya) and Filipino.',
      'Durian is beloved and strongly scented. Many hotels, taxis, and buses ask you not to bring it inside. Eat it at the stall, or pack it in a sealed container if a host says that is welcome. Sunscreen, insect repellent, and a reusable bottle cover most day trips.',
      'Visa rules depend on your nationality. Check the Bureau of Immigration before you travel, and keep a copy of your onward booking. Emergency assistance in the Philippines is available through 911.',
    ],
  },
  {
    slug: 'information-centers',
    title: 'Tourist Information Centers',
    summary: 'The City Tourism Operations Office answers questions, licenses tourism businesses, and welcomes guests.',
    icon: 'lucide:info',
    paragraphs: [
      'The visitor-facing office is the City Tourism Operations Office, 2nd Floor, Pasalubong Center, Palma Gil Street, Davao City 8000. Hours are Monday to Friday, 8:00 AM to 5:00 PM.',
      'Call 0995 136 5173 (Globe) or 0968 223 0613 (Smart), or write to ctoo@davaocity.gov.ph. The office can point you to licensed guides, current festival information, and maps.',
      'For Mount Apo, do not rely on informal trail advice alone. Permits and accredited guides are required. The tourism office is the right place to ask how a legal, well-supported climb is arranged.',
    ],
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    summary: 'Short answers on safety, language, Samal, and the mountain.',
    icon: 'lucide:circle-help',
    paragraphs: [
      'The questions below cover the things visitors ask most often. For a plan that involves a group, a media visit, or an official guest, write to the office directly.',
    ],
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'Is Davao a practical city for a first trip to the Philippines?',
    answer:
      'Yes. The airport is close to town, English is widely spoken, and the main sights sit within a day-trip radius. Use registered transport at night and the same awareness you would in any large city.',
  },
  {
    question: 'When should I come if I want both the beach and the festival?',
    answer:
      'Kadayawan is in August, which is the wetter season. The parades still go ahead, and Samal remains a short ride away. For hiking Mount Apo, the drier months from December to May are kinder.',
  },
  {
    question: 'Can I climb Mount Apo without a guide?',
    answer:
      'No. Treat the mountain as a permitted trek with an accredited guide. Weather, park rules, and the communities on the trail all matter. Start the plan with the tourism office or a registered operator.',
  },
  {
    question: 'How do I get to Samal Island?',
    answer:
      'Passenger boats cross the channel from Davao. The ride itself is brief. Confirm the wharf and the last return trip on the day you go, especially if you are not staying overnight.',
  },
  {
    question: 'What languages will I hear?',
    answer:
      'Cebuano is the everyday language of the street. Filipino and English are widely understood, and you can navigate hotels, restaurants, and the tourism office in English.',
  },
  {
    question: 'What is the one food I should not skip?',
    answer:
      'Durian, if you are curious, eaten where it is sold. Then add pomelo, mangosteen when it is in season, kinilaw, and chocolate from the Malagos hills.',
  },
]
