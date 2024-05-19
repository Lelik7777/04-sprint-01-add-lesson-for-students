import { AppThunk } from '../../app/store'
import { decksAPI } from './decks-api'
import { addDeckAC, setDecksAC } from './decks-reducer'

export const fetchDecksTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await decksAPI.fetchDesks()
    dispatch(setDecksAC(res.data.items))
  } catch (error) {
    throw Error(`${error}`)
  }
}

export const addDeckTC =
  (name: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await decksAPI.addDeck(name)
      dispatch(addDeckAC(res.data))
    } catch (error) {
      throw Error(`${error}`)
    }
  }
