import React, { useState, useRef } from 'react'
import Country from './Country'

export default function App() {
  const medals = useRef([
    { id: 1, name: "gold" },
    { id: 2, name: "silver" },
    { id: 3, name: "bronze" },
  ]);

  const [countries, setCountries] = useState([
    { id: 1, name: 'United States' },
    { id: 2, name: 'China' },
    { id: 3, name: 'France' },
  ])

  const deleteCountry = (countryName) => {
    setCountries(prev => prev.filter(country => country.name !== countryName))
  }

  return (
    <div style={{ margin: '20px', padding: '20px' }}>
      <h1>Olympic Medals</h1>
      {countries.map(country => (
        <Country
          key={country.id}
          name={country.name}
          onDelete={deleteCountry}
          medals={medals.current}
        />
      ))}
    </div>
  )
}
