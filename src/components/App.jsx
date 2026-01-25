import React, { useState } from 'react'
import Country from './Country'

export default function App() {
  const [goldCounts, setGoldCounts] = useState({
    "United States": 0,
    "China": 0,
    "Japan": 0
  })

  const incrementGold = (countryName) => {
    setGoldCounts(prev => ({
      ...prev,
      [countryName]: prev[countryName] + 1
    }))
  }

  const resetAllCounts = () => {
    setGoldCounts({
      "United States": 0,
      "China": 0,
      "Japan": 0
    })
  }

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1>Olympic Medals</h1>
      <Country name="United States" gold={goldCounts["United States"]} onIncrement={incrementGold} />
      <Country name="China" gold={goldCounts["China"]} onIncrement={incrementGold} />
      <Country name="Japan" gold={goldCounts["Japan"]} onIncrement={incrementGold} />
      <button onClick={resetAllCounts} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Reset All Counters
      </button>
    </div>
  )
}
