import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='mx-auto mt-5 bg-zinc-700 rounded-md p-5 w-52'>
          <div className='rounded-md bg-white mb-3'>
            <h1 className='text-right pr-2'>Result</h1>
          </div>
          <ul className='grid grid-cols-4'>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>1</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2 '>2</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>3</li>
            <li className='bg-orange-500 text-center rounded-lg p-1 m-2'>+</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>4</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>5</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>6</li>
            <li className='bg-orange-500 text-center rounded-lg p-1 m-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="currentColor" className="size-4">
  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
</svg>
</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>7</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>8</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>9</li>
            <li className='bg-orange-500 text-center rounded-lg p-1 m-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" fill="currentColor" className="size-5">
  <path  d="M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
  <path d="M9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
</svg>
</li>
            <li className='bg-gray-300 text-center rounded-lg p-1 m-2'>0</li>
            <li className='bg-orange-500 text-center col-span-3 rounded-lg p-1 m-2'>=</li>
          </ul>
      </div>
    </>
  )
}

export default App
