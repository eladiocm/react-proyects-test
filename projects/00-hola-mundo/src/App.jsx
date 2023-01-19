import { useState } from "react"

function App() {

  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

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
        <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

export default App
