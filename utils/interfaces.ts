export interface speakerInfo {
  name: string
  talk: string
  image: string
  socials: {
    twitter: string
    github: string
    youtube: string
    Facebook: string
  }
}

export interface Article {
  _path: string
  _dir: string
  _draft: boolean
  _partial: boolean
  _locale: string
  _empty: boolean
  title: string
  description: string
  excerpt: string
  subtitle: string
  alt: string
  authorNames: string
  imgurl: string
  tags: string[]
  createdAt: string
  attribution: string
  authorImages: string[]
  body: {
    type: string
    children: any[]
    toc: {
      title: string
      searchDepth: number
      depth: number
      links: any[]
    }
  }
  _type: string
  _id: string
  _source: string
  _file: string
  _extension: string
}
