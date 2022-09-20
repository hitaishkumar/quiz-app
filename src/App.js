import Flashcardlist from "./Flashcardlist";
import React , {useState} from 'react'
import Llet from './llet';
import './App.css'
function App() {
  const[flashcards,setFlashCards] = useState(QA)
  return (
    <div>
      <p>
          My first react app
        </p>
        <h1>
          <Flashcardlist flashcards = {flashcards} />
        </h1>
        <h1>
          <Llet/>
        </h1>
    </div>
  );
}
export default App;

const QA = [
  {
    id: 1,
    q : "Hello this is a question",
    ans : 'a4',
    options: [
      'a1',
      'a2',
      'a3',
      'a4',
      'a5'
    ]


  },
  {
    id: 2,
    q : "Hello this is 2nd question",
    ans : 'a1',
    options: [
      'aa1',
      'aa2',
      'aa3',
      'aa4',
      'aa5'
    ]


  }
]
