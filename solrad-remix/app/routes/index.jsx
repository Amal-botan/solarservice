import {
  json,
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useTransition,
} from "remix";

export default function Index() {
  const transition = useTransition();
  return (
    <>
      <header className="header">
        <nav className="header header-nav">
          <img
            src="../../public/images/Social Icon Logo Only Zoom In.jpg"
            alt="logo of square solar"
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
        <container className="hero-container">
          <h1 className="hero-container hero-container-title">{heroTitle}</h1>
          <img
            className="hero-container hero-container-image"
            src="../../public/images/Social Icon Logo Only Zoom In.jpg"
          />
          <aside className="hero-container hero-container-aside">
            <p className="hero-container-aside hero-aside-text">{heroText}</p>
          </aside>
        </container>
      </header>
      <main className="main">
        <article className="main main-project">
          <header className="main-project project-header">
            <p>{userName}</p>
            <img src={userAvatar} alt={avatarAltText}></img>
            <p>{userHandle}</p>
            <p>{postTime}</p>
            {/* will render the image corresponding to the users status */}
            <img src={userStatus} alt={userStatusAltText} />
            {/* onClick of user profile should render discord like description of user */}
          </header>
          <container className="main-project project-container">
             <h1 className="project-container project-title">{projectTitle}</h1>
          <img
            className="project-container project-image"
            src={projectImage} alt={projectImageAltText}
          />
          <p>{projectText}</p>
          </container>
         <footer className="main-project project-footer">
            {/* expand for full project details */}
          <img className='project-footer project-image' id='expand' src={expandImage} alt={expandImageAltText} />
          {/* comment on the project (may open a modal then redirects to project page after posting) */}
          <img src={commentProjectImage} id='comment' alt={commitProjectImageAltText} />
          {/* share the project, opens a modal with a link to the project page or just is a clipboard*/}
          <img src={shareProjectImage} id='share' alt={shareProjectImageAltText} />
          {/* like, interactive */}
          <img src={likeProjectImage} id='like' alt={likeProjectImageAltText} />
          {/* favourite */}
          <img src={favouriteProjectImage} id='favourite' alt={favouriteProjectImageAltText} />
         </footer>
        </article>
      </main>
      <footer className="footer">
        <nav className="footer footer-nav">
          <img
            src="../../public/images/Social Icon Logo Only Zoom In.jpg"
            alt="logo of square solar"
          />
          <p className="footer-nav nav-title">Home</p>
          <p className="footer-nav nav-title">Projects</p>
          <p className="footer-nav nav-title">Chat</p>
        </nav>
        <p className="footer footer-text">{footerText}</p>
      </footer>
    </>
  );
}
