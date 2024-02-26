import { defineStore } from 'pinia'

export const useData = defineStore('data', {
  state: () => ({
    projects: [
      { nameOne: 'Stardex', nameTwo: 'P2P Trade', link: '/work' },
      { nameOne: 'PlayW', nameTwo: 'WEB3', link: '#' },
      { nameOne: 'Geo', nameTwo: 'Privacy', link: '#' }
    ],
    info: {
      name: 'Studio of Brathers Avdrosov',
      direct: 'Web Developers',
      city: 'St. Petersburg',
      email: 'bandrones@gmail.com'
    },
    routerLinks: [
      { name: 'about', link: '#' },
      { name: 'journal', link: '#' }
    ],
    socialLinks: [
      { name: 'telegram', link: '#' },
      { name: 'linkedin', link: '#' },
      { name: 'github', link: '#' }
    ],
    accounts: [
      { nameOne: 'Stardex', nameTwo: 'P2P Trade', link: '#' },
      { nameOne: 'PlayW', nameTwo: 'WEB3', link: '#' },
      { nameOne: 'Geo', nameTwo: 'Privacy', link: '#' }
    ]
  })
})
