/* DDX London — one evening, at the conference venue, hosted with Dscout.
   Served only on the side-london host. Invitation only: this page is not
   linked from anywhere public.

   The venue facts are checked: the almshouses on Kingsland Road were built in
   1714, are Grade I listed, opened as a museum in 1914, and reopened in June
   2021 after an \u00a318m redevelopment. The museum\u2019s subject is home and home
   life from 1600 to today. */
export const LONDON_EVENTS = [
  {
    id: 'london-dscout',
    kicker: 'After the last talk',
    title: 'Happy Hour',
    by: 'with Dscout',
    partners: ['dscout'],
    weekday: 'Friday', date: '20 November 2026', time: '6:00 PM \u2013 open end',
    start: '2026-11-20T18:00:00', end: '2026-11-20T21:00:00',
    venue: 'Museum of the Home', address: '136 Kingsland Road, London E2 8EA',
    maps: 'https://maps.google.com/?q=Museum+of+the+Home,+136+Kingsland+Road,+London+E2+8EA',
    bg: 'assets/img/bg/museum-of-the-home.jpg?v=20261006212557', bgPos: '50% 62%',
    lede: 'The ideas are still warm. Don\u2019t let them cool on the way to the tube.',
    body: 'When the stage goes dark, the room doesn\u2019t. Dscout keeps everyone together for drinks and the conversations that didn\u2019t fit into the Q&A \u2014 no taxi, no second venue, just the people you spent the day with. Which is fitting, because of all the places to argue about what we should build next, this one has been thinking about how people actually live for longer than any of us. The almshouses on Kingsland Road were built in 1714 and have been a museum since 1914; the whole collection is devoted to home life from 1600 to today. Three hundred years of rooms, and we get the evening in them.',
    agenda: [
      ['6:00', 'Doors \u2014 straight from the closing session'],
      ['6:30', 'Drinks, and the people you meant to talk to'],
      ['9:00', 'Last call'],
    ],
    fine: '',
    /* No Notion target yet \u2014 Sebastian still has to say where these land. */
    notion: null,
  },
];
