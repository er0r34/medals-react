import React from 'react'

export default function Country({ name = "United States", gold = 0, onIncrement }) {
  const handleClick = () => {
    onIncrement(name)
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Gold Medals: {gold}</p>
      <button onClick={handleClick}>
        Add Gold Medal
      </button>
    </div>
  )
}
