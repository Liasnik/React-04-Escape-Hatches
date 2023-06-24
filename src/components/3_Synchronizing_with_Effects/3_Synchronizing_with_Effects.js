import { forwardRef } from 'react'

export const SynchronizingWithEffects = forwardRef((_, ref) => {
  return (
    <div ref={ref} style={{ height: '300px', backgroundColor: 'darkgrey' }}>
      <div className="title">
        <h1>3. Synchronizing with Effects (Синхронизация с эффектами)</h1>
      </div>
    </div>
  )
})
