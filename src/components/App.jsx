import React, { useState, useRef } from 'react'
import Country from './Country'
import NewCountry from './NewCountry'

export default function App() {
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const [countries, setCountries] = useState([
    { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
    { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
    { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
  ])

  const addCountry = (countryName) => {
    const newId = Math.max(...countries.map(c => c.id)) + 1
    setCountries(prev => [...prev, { id: newId, name: countryName, gold: 0, silver: 0, bronze: 0 }])
  }

  const deleteCountry = (countryName) => {
    setCountries(prev => prev.filter(country => country.name !== countryName))
  }

  const handleIncrement = (countryName, medalType) => {
    setCountries(prev => 
      prev.map(country => 
        country.name === countryName 
          ? { ...country, [medalType]: country[medalType] + 1 }
          : country
      )
    )
  }

  const handleDecrement = (countryName, medalType) => {
    setCountries(prev => 
      prev.map(country => 
        country.name === countryName 
          ? { ...country, [medalType]: Math.max(0, country[medalType] - 1) }
          : country
      )
    )
  }

  // Calculate total medals for all countries
  const totalGold = countries.reduce((sum, country) => sum + country.gold, 0)
  const totalSilver = countries.reduce((sum, country) => sum + country.silver, 0)
  const totalBronze = countries.reduce((sum, country) => sum + country.bronze, 0)
  const grandTotal = totalGold + totalSilver + totalBronze

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1>Olympic Medals</h1>
      
      <NewCountry onAddCountry={addCountry} />
      
      {/* Display total medals for all countries */}
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        color: '#333',
        padding: '15px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '2px solid #ddd',
        width: '370px'
      }}>
        <h2 style={{ margin: '0 0 10px 0' }}>Total Medals Awarded ({grandTotal})</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <span><strong>🥇 Gold:</strong> {totalGold}</span>
          <span><strong>🥈 Silver:</strong> {totalSilver}</span>
          <span><strong>🥉 Bronze:</strong> {totalBronze}</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1400px'
      }}>
        {countries.map(country => (
          <Country
            key={country.id}
            country={country}
            onDelete={deleteCountry}
            medals={medals.current}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  )
}
