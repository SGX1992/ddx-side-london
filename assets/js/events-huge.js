/* MAKE.EXE VIP Access — Huge × DDX, New York, 6 October 2026.

   The page for this one lives in its own repo (../ddx-huge →
   huge.ddxconference.com); this file exists so the inbox function knows the
   event id is real and where its RSVPs belong. No card is rendered from it.

   Unlike the San Diego evenings, the target is not a fresh CRM: it is the
   curated outreach list the DDX team already built, so the bridge updates the
   matching row rather than adding a second one for the same person. */
export const HUGE_EVENTS = [
  {
    id: 'huge-make-vip',
    title: 'MAKE.EXE VIP Access',
    by: 'Huge × DDX',
    weekday: 'Tuesday', date: '6 October 2026', time: '4:30 – 5:30 PM',
    start: '2026-10-06T16:30:00', end: '2026-10-06T18:00:00',
    venue: 'SHiFT Midtown', address: '330 W 38th St, New York, NY 10018',
    lede: 'The VIP hour before MAKE.EXE, Huge’s live GenAI creative battle.',
    fine: '',
    /* "HUGE NYC Target Invitees (Work-In-Progress)", inside the HUGE
       Partnership page. Title property is Company; the person is in Name. */
    notion: { email: 'Email', db: '580816a8-e86c-498a-acd7-4397c9e01e6a', mode: 'update-or-create' },
  },
  {
    id: 'huge-london-dinner',
    title: 'VIP Dinner Roundtable',
    by: 'Huge \u00d7 DDX',
    weekday: 'Thursday', date: '19 November 2026', time: 'evening',
    start: '2026-11-19T18:30:00', end: '2026-11-19T22:30:00',
    venue: 'Central London', address: 'Central London \u2014 venue confirmed by email',
    lede: 'A private dinner and roundtable with Huge and DDX, the night before DDX London.',
    fine: '',
    /* No Notion target yet — Sebastian still has to say where these land.
       Until then the bridge parks them; the inbox keeps every RSVP safely. */
    notion: null,
  },
];
