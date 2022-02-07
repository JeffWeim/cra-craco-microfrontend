import React, { lazy, Suspense } from 'react'
import SafeComponent from './safe-component'

import App1 from 'app1/App1'
import App2 from 'app2/App2'


const Container = () => {
  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #cecece',
      }}
    >
      <h1>Container application</h1>
      <SafeComponent>
        <Suspense fallback={() => <div>loading app1</div>}>
          <App1 />
        </Suspense>
      </SafeComponent>
      <SafeComponent>
        <Suspense fallback={() => <div>loading app2</div>}>
          <App2 />
        </Suspense>
      </SafeComponent>
    </div>
  )
}

export default Container
