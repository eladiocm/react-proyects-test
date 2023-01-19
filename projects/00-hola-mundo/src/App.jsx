
function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="/img/image.jpg"
          alt="El avatar de midudev" />
        <div className="tw-followCard-info">
          <strong>Migel Angel Duran</strong>
          <span className="tw-followCard-infoUserName">@midudev</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}

export default App
