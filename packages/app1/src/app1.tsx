import React from 'react'

const App1 = () => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        margin: '5px',
        padding: '10px',
        boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <h1 style={{ border: '1px dashed black', display: 'inline-block', padding: '20px' }}>App 1</h1>
      <img alt="doggo" src="https://placedog.net/640/480?random" />
    </div>
  )
}

export default App1
