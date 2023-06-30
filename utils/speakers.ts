import type { speakerInfo } from '@/utils/interfaces'

export const speakers = ref<speakerInfo[]>([
  {
    name: 'Selemon Brahanu',
    talk: 'Supuercharge your webapps with speed, scalability and modernity',
    image:
      'https://avatars.githubusercontent.com/u/106826371?v=4',
    socials: {
      twitter: 'https://twitter.com/selemondev',
      github: 'https://github.com/selemondev',
      youtube: '',
      Facebook: '',
    },
  },
  {
    name: 'Joseph Wamburu',
    talk: 'Navigating DevOps and Mastering Vue, A Developers Tale',
    image:
      'https://avatars.githubusercontent.com/u/26235049?v=4',
    socials: {
      twitter: 'https://twitter.com/josephnjogu487',
      github: 'https://github.com/joseph-njogu',
      youtube: '',
      Facebook: '',
    },
  },
  {
    name: 'Alexander Gekov',
    talk: 'Building a BLOG with Nuxt 3 + Storyblok',
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--T184Wo11--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/504563/b2f3525d-aee9-43c3-bd4a-0f9d8b4ada43.png',
    socials: {
      twitter: 'https://twitter.com/AlexanderGekov',
      github: 'https://github.com/alexander-gekov',
      youtube: 'https://www.youtube.com/@alexandergekov',
      Facebook: '',
    },
  },
  {
    name: 'Brian Nduhiu',
    talk: 'Animation Techniques in Vue JS',
    image: 'https://avatars.githubusercontent.com/u/43300544?v=4',
    socials: {
      twitter: 'https://twitter.com/BrianNduhiu',
      github: 'https://github.com/brian-nduhiu',
      youtube: '',
      Facebook: '',
    },
  },
  {
    name: 'Mauko Maunde',
    talk: 'State management in Vuejs 3',
    image: '',
    socials: {
      twitter: '',
      github: 'https://github.com/maukoese',
      youtube: '',
      Facebook: '',
    },
  },
])
