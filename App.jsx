import { useState } from "react";

function App() {
  const [name, setName] = useState('Front Beginners')

  return (
    <>
    <div>{name}</div>
    <ChildrenOne />
    </>
  )
}

function ChildrenOne() {
  return (
    <ChildrenTwo />
  )
}

function ChildrenTwo() {
  return (
    <button onClick={() => setName('Carlinhos da massa')}>Mude o nome</button>
  )
}

export default App