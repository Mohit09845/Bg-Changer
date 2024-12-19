import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
      <div className='px-2 fixed justify-center inset-x-0 flex bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none shadow-lg rounded-full px-4 py-2 text-white' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("white")} className='outline-none shadow-lg rounded-full px-4 py-2' style={{ backgroundColor: "white" }}>white</button>
          <button onClick={() => setColor("green")} className='outline-none shadow-lg rounded-full px-4 py-2' style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none shadow-lg rounded-full px-4 py-2 text-white' style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("black")} className='outline-none shadow-lg rounded-full px-4 py-2 text-white' style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor("orange")} className='outline-none shadow-lg rounded-full px-4 py-2' style={{ backgroundColor: "orange" }}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
