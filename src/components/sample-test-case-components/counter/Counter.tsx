import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  return (
    <div className='counter-container'>
      <div> User Click and Keyboard event like focus on tab </div>
      <hr />
      
      <h1> Counter is : <span className='bg-gray-100 text-green-700 m-4'> {count} </span> </h1>
      <div>
        <button className='border-2 border-black m-4 bg-blue-600' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
      <input
        type="number"
        className='border border-black'
        name="amount"
        value={amount ?? ''}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button className='border-2 border-black m-4 bg-green-600' onClick={() => setCount(amount)}>Set</button>
      </div>
    </div>
  )
}