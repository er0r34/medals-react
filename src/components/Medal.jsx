import React from 'react'

export default function Medal({ medalType, count, countryName, onIncrement, onDecrement }) {
  const handleIncrement = () => {
    onIncrement(countryName, medalType)
  }

  const handleDecrement = () => {
    onDecrement(countryName, medalType)
  }

  // Get medal emoji based on type
  const getMedalEmoji = (type) => {
    switch(type) {
      case 'gold': return '🥇'
      case 'silver': return '🥈'
      case 'bronze': return '🥉'
      default: return '🏅'
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #555'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '24px' }}>{getMedalEmoji(medalType)}</span>
        <span style={{ textTransform: 'capitalize', color: 'white' }}>
          {medalType} medals: {count}
        </span>
      </div>
      
      <div style={{ display: 'flex', gap: '5px' }}>
        <button 
          onClick={handleDecrement}
          disabled={count === 0}
          style={{
            backgroundColor: count === 0 ? '#666' : '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: count === 0 ? 'not-allowed' : 'pointer',
            fontSize: '16px',
            opacity: count === 0 ? 0.5 : 1
          }}
        >
          -
        </button>
        
        <button 
          onClick={handleIncrement}
          style={{
            backgroundColor: '#388e3c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}