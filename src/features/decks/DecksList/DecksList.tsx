import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import s from './DecksList.module.css'
import { decksAPI } from '../decks-api'
import { setDecksAC } from '../decks-reducer'
import { DeckItem } from './DeckItem/DeckItem'
import { fetchDecksTC } from '../decks-thunks'

export const DecksList = () => {
  const decks = useAppSelector((state) => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((deck) => {
        return <DeckItem deck={deck} key={deck.id} />
      })}
    </ul>
  )
}
