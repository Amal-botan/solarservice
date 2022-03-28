import { useTransition, Link } from 'remix';

export default function HeaderNav () {
  // show current route with different title or make it an image style it differently
  const transition = useTransition()
  return (
    <nav className="header header-nav">
    <img src={siteLogo} alt={altTextLogo} />
    <span className="header-nav span-nav">
      {" "}
      <p className="span-nav nav-title">
        <Link to="/">Home</Link>
      </p>
      <img
        className="span-nav nav-img"
        src={homeIcon}
        alt={homeIconAltText}
      />
    </span>{" "}
    <span className="header-nav span-nav">
      <p className="span-nav nav-title">
        <Link to="projects">Projects</Link>
      </p>
      <img
        className="span-nav nav-img"
        src={projectIcon}
        alt={projectIconAltText}
      />
    </span>
    <span className="header-nav span-nav">
      <p className="span-nav nav-title">
        <Link to="chat">Chat</Link>
      </p>
      <img
        className="span-nav nav-img"
        src={chatIcon}
        alt={chatIconAltText}
      />
    </span>
    <Form method="post">
      <label className="header-nav nav-label">
        Search: <img src={searchIcon} alt={searchIconAltText} />
        <input
          className="header-nav nav-input"
          type="text"
          name="search"
        />
      </label>
      {transition.submission ? (
        <span className="header-nav span-loader">
          <img
            className="span-nav nav-img"
            src={loadingIcon}
            alt={loadingIconAltText}
          />
        </span>
      ) : null}
    </Form>
    {userLoggedIn ? (
      <div className="header-nav div-nav">
        <p className="header-nav div-nav" >
          <Link to="logout">logout</Link>
        </p>
        <img className="div-nav div-img" src={logoutIcon} alt={logoutIconAltText} />
      </div>
    ) : (
      <div className="header-nav div-nav">
        <p className="div-nav nav-text">
          <Link to="logout">logout</Link>
        </p>
        <img className="div-nav nav-img" src={loginIcon} alt={loginIconAltText} />
      </div>
    )}
  </nav>
  )
}
