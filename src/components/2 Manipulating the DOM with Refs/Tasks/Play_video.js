import { useState, useRef } from 'react'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const playRef = useRef(null)

  function handleClick() {
    const nextIsPlaying = !isPlaying
    setIsPlaying(nextIsPlaying)
    nextIsPlaying ? playRef.current.play() : playRef.current.pause()
    // setIsPlaying(!isPlaying)
    // !isPlaying ? playRef.current.play() : playRef.current.pause()
  }

  return (
    <div style={{ margin: '40px auto' }}>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video
        width="250"
        ref={playRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <a
        href="https://codesandbox.io/s/j42s0w?file=/App.js&utm_medium=sandpack"
        target="_blank"
        rel="noreferrer"
      >
        {' '}
        <br />
        codesandbox
      </a>
    </div>
  )
}
