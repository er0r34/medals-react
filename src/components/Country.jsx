import React from 'react'
import Medal from './Medal'

export default function Country({ name = "United States", onDelete, medals }) {
  const handleDelete = () => {
    onDelete(name)
  }

  return (
    <div style={{ 
      border: '2px solid #ccc', 
      borderRadius: '8px', 
      margin: '10px 0', 
      backgroundColor: '#404040',
      overflow: 'hidden',
      width: '300px'
    }}>
      <div style={{
        backgroundColor: '#505050',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #666'
      }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
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
          <Medal key={medal.id} name={medal.name} />
        ))}
      </div>
    </div>
  )
}
