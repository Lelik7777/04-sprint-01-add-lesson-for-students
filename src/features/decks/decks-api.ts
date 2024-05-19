import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDesks() {
    return instance.get<FetchDecksResponseType>('decks')
  },
  addDeck(name: string) {
    return instance.post<DeckType>('decks', { name })
  },
}

export type FetchDecksResponseType = {
  items: Array<DeckType>
  pagination: PaginationType
}
export type DeckType = {
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type PaginationType = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
