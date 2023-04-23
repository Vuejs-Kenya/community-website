interface sponsor {
  metric: number
  item: string
}

export const metrics = ref<sponsor[]>([
  {
    metric: 100,
    item: 'Events',
  },
  {
    metric: 1000,
    item: 'Twitter Followers',
  },
  {
    metric: 20,
    item: 'Speakers',
  },
  {
    metric: 100000,
    item: 'YouTube Views',
  },
  {
    metric: 700,
    item: 'LinkedIn Followers',
  },
  {
    metric: 3000,
    item: 'YouTube Subscribers',
  },
])
