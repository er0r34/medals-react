import React, { useState } from 'react'

export default function NewCountry({ onAddCountry }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [countryName, setCountryName] = useState('')

  const openDialog = () => {
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setCountryName('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = countryName.trim()
    
    if (trimmedName.length > 0) {
      onAddCountry(trimmedName)
      closeDialog()
    }
  }

  const isNameValid = countryName.trim().length > 0

  return (
    <>
      <button 
        onClick={openDialog}
        style={{ 
          backgroundColor: '#646cff', 
          color: 'white', 
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Add New Country
      </button>

      {isDialogOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#404040',
            padding: '30px',
            borderRadius: '8px',
            border: '2px solid #ccc',
            minWidth: '300px'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: 'white' }}>Add New Country</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Enter country name"
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '20px',
                  borderRadius: '4px',
                  border: '1px solid #666',
                  backgroundColor: '#333',
                  color: 'white',
                  fontSize: '16px'
                }}
                autoFocus
              />
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={closeDialog}
                  style={{
                    backgroundColor: '#666',
                    color: 'white',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isNameValid}
                  style={{
                    backgroundColor: isNameValid ? '#646cff' : '#333',
                    color: isNameValid ? 'white' : '#888',
                    padding: '8px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isNameValid ? 'pointer' : 'not-allowed'
                  }}
                >
                  Add Country
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}