import React from 'react'
import Medal from './Medal'

export default function Country({ country, onDelete, medals, onIncrement, onDecrement }) {
  const { name, gold, silver, bronze } = country
  
  const handleDelete = () => {
    onDelete(name)
  }

  // Calculate total medals for this country
  const totalMedals = gold + silver + bronze

  return (
    <div style={{ 
      border: '2px solid #ccc', 
      borderRadius: '8px', 
      margin: '0', 
      backgroundColor: '#404040',
      overflow: 'hidden',
      width: '100%'
    }}>
      <div style={{
        backgroundColor: '#505050',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #666'
      }}>
        <div>
          <h3 style={{ margin: 0 }}>{name}</h3>
          <p style={{ margin: '5px 0 0 0', color: '#ccc', fontSize: '14px' }}>
            Total Medals: {totalMedals}
          </p>
        </div>
        <button onClick={handleDelete} style={{ 
          backgroundColor: 'transparent', 
          color: 'white', 
          fontSize: '18px', 
          padding: '4px 8px',
          border: 'none',
          cursor: 'pointer'
        }}>
          🗑️
        </button>
      </div>
      <div style={{ padding: '15px' }}>
        {medals.map(medal => (
          <Medal 
            key={medal.id} 
            medalType={medal.name}
            count={country[medal.name]}
            countryName={name}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </div>
  )
}
