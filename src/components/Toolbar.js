export default function Toolbar() {
  return (
    <div className="menu">
      <div style={{ float: 'right', marginRight: '50px' }}>
        <a
          href="https://liasnik.github.io/React-3-Managing-State/"
          target="_blank"
          rel="noreferrer"
        >
          Managing State
        </a>
      </div>
      <div style={{ float: 'right', marginRight: '50px' }}>
        {' '}
        <a href="https://github.com/Liasnik" target="_blank" rel="noreferrer">
          My_GitHub
        </a>
      </div>
      <div style={{ float: 'right', marginRight: '50px' }}>
        <a href="https://liasnik.github.io/React-04-Escape-Hatches/">Home</a>
        {/* <a href="/html/default.asp">Home</a> */}
      </div>
    </div>
  )
}
