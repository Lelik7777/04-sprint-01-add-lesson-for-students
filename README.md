# Дополнительный урок 01 для спринта 04

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

- Задание 1 (пишем get-запрос) - 5 минут 1.Написать get-запрос за decks и протипизировать ответ (fetchDecks). (Параметры указывать и типизировать не надо) 2.Отправить запрос при монтировании компонента DecksList
- Задание 2 (redux flow) - отрисовать колоды, используя redux state, 10 минут

Написать action creator (setDecksAC)
Написать case в reducer для этого action
Задиспатчить action в компоненте DecksList
Получить decks из redux state в компоненте DecksList
Отрендерить decks, используя компонент DeckItem
Задание 3 (async redux flow) Вынести асинхронную логику из компонента DecksList

Написать fetchDecksTC (файл decks-thunks.ts)
Использовать fetchDecksThunk в компоненте DecksList

Задание 4 (post-запрос)

Написать post-запрос в decksAPI (addDeck) - будем работать только с name
Написать addDeckTC и addDeckAC (+case в decksReducer)
Задиспатчить thunk при отправке формы в компоненте AddNewDeckForm (функция onSubmit, name берём из data)
