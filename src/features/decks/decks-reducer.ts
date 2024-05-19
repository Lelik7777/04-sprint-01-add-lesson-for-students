import { DeckType } from './decks-api'

const initialState = {
  decks: [] as Array<DeckType>, // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return { ...state, decks: action.decks }
    }

    case 'ADD_DECK': {
      return { ...state, decks: [action.deck, ...state.decks] }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Array<DeckType>) => ({ type: 'SET_DECKS', decks }) as const
export const addDeckAC = (deck: DeckType) => ({ type: 'ADD_DECK', deck }) as const
export type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
