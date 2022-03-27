import { useTransition } from 'remix';

export default function HeaderNav () {
  // show current route with different title or make it an image style it differently
  const transition = useTransition()
  return (
    <nav className="header header-nav">
          <img
            src={siteLogo}
            alt={altTextLogo}
          />
          <p className="header-nav nav-title">Home</p>
          <p className="header-nav nav-title">Projects</p>
          <p className="header-nav nav-title">Chat</p>
          <Form method="post">
            <label className="header-nav nav-label">
              Search:{" "}
              <input
                className="header-nav nav-input"
                type="submit"
                name="search"
              />
            </label>
            {transition.submission ? (
              <span className="header-nav nav-loader">
                <svg></svg>
              </span>
            ) : null}
          </Form>
        </nav>
  )
}
