import React from 'react'
import Flashcard from './Flashcard'

export default function Flashcardlist({flashcards}) {
  return (
    <div className='Card-G rid'>
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}
