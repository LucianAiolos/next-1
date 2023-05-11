"use client"

import { useState } from 'react'

const styles = 'text-3xl border rounded-md border-gray-500 p-4'

export default function counter() {
  const [count, setCount] = useState(0)

  const increment =()=> {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="w-1/2 flex flex-col items-center">
      {/* <h2 className="mb-10">Couter</h2> */}
      <div className="w-2/4  flex items-center justify-between">
        <button className={styles}
          onClick={increment}
        >
          +
        </button>
        <p className="text-2xl">{count}</p>
        <button className={styles}
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  )
}