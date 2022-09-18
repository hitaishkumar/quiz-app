import React  , {useState} from 'react'

export default function Flashcard({flashcard}) {
    const[flip , setFlip] = useState(false)
  return (
    <div onMouseEnter={() => setFlip(!flip) } onMouseLeave = {() => setFlip(!flip)}>
        {flip ? flashcard.ans : flashcard.q}
        
    </div>  
  )
}
