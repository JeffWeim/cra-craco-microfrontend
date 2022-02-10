import React from 'react'

const App2 = () => {
  return (
    <div
      style={{
        border: '1px solid red',
        margin: '5px',
        padding: '10px',
        boxShadow: '1px 1px 1px 1px rgba(255,0,0,0.1)',
        textAlign: 'right',
        color: 'salmon',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
      }}
    >
      <h1 style={{ border: '1px dashed salmon', display: 'inline-block', padding: '20px' }}>App 2</h1>
      <img alt="doggo" src="https://placedog.net/640/480?random" />
    </div>
  )
}

export default App2
