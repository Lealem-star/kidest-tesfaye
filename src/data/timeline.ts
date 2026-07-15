export interface TimelineItem {
  id: string
  title: string
  description: string
  date: string
}

export const timelineData: TimelineItem[] = [
  {
    id: 'met',
    title: 'We Met',
    description:
      'The moment our paths crossed, my heart knew something beautiful had begun.',
    date: 'The Beginning',
  },
  {
    id: 'conversation',
    title: 'First Conversation',
    description:
      'Every word you spoke felt like poetry. I could have listened forever.',
    date: 'First Words',
  },
  {
    id: 'prayer',
    title: 'First Prayer',
    description:
      'We prayed together, and in that sacred moment, our souls became one.',
    date: 'Sacred Bond',
  },
  {
    id: 'promise',
    title: 'Our Promise',
    description:
      'We promised to love through every distance, every season, every heartbeat.',
    date: 'Forever',
  },
  {
    id: 'today',
    title: 'Today',
    description:
      'Today we celebrate you — the most beautiful gift in my life.',
    date: 'Your Birthday',
  },
  {
    id: 'future',
    title: 'Our Future',
    description:
      'A future where distance is just a chapter, and together is our forever story.',
    date: 'To Come',
  },
]
