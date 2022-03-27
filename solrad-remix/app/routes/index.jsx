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
  const {
    homeIcon: "",
    homeIconAltText: "",
    projectIcon: "",
    projectIconAltText: "",
    chatIcon: "",
    chatIconAltText: "",
    siteLogo: "",
    altTextLogo: "",
    loadingIcon: "",
    loadingIconAltText: "",
    heroTitle: "",
    heroImage: "",
    heroImageAltText: "",
    heroText: "",
    userName: "",
    userHandle: "",
    avatarAltText: "",
    postTime: "",
    userAvatar: "",
    userStatus: "",
    userStatusAltText: "",
    projectText: "",
    projectImageAltText: "",
    expandImage: "",
    expandImageAltText: "",
    commentProjectImage: "",
    commentProjectImageAltText: "",
    shareProjectImage: "",
    shareProjectImageAltText: "",
    likeProjectImage: "",
    likeProjectImageAltText: "",
    favouriteProjectImage: "",
    favouriteProjectImageAltText: "",
  };
  return (
    <>
      <header className="header">
        <nav className="header header-nav">
          <img
           src={siteLogo}
           alt={altTextLogo}
          />
          <span className="header-nav span-nav"> <p className="span-nav nav-title"><Link>Home</Link></p>
          <img className="span-nav nav-img" src={homeIcon} alt={homeIconAltText} /></span> <span className="header-nav span-nav"><p className="span-nav nav-title"><Link>Projects</Link></p>
          <img className="span-nav nav-img" src={projectIcon} alt={projectIconAltText} />
          </span>
          <span className="header-nav span-nav"><p className="span-nav nav-title"><Link>Chat</Link></p>
          <img className="span-nav nav-img" src={chatIcon} alt={chatIconAltText} /></span>
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
              <span className="header-nav span-loader">
                <img className="span-nav nav-img" src={loadingIcon} alt={loadingIconAltText} />
              </span>
            ) : null}
          </Form>
        </nav>
        <container className="hero-container">
          <h1 className="hero-container hero-container-title">{heroTitle}</h1>
          <img
            className="hero-container hero-container-image"
            src={heroImage}
            alt={heroImageAltText}
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
          <img className='project-footer project-image' src={commentProjectImage} id='comment' alt={commitProjectImageAltText} />
          {/* share the project, opens a modal with a link to the project page or just is a clipboard*/}
          <img className='project-footer project-image' src={shareProjectImage} id='share' alt={shareProjectImageAltText} />
          {/* like, interactive */}
          <img className='project-footer project-image' src={likeProjectImage} id='like' alt={likeProjectImageAltText} />
          {/* favourite */}
          <img className='project-footer project-image' src={favouriteProjectImage} id='favourite' alt={favouriteProjectImageAltText} />
         </footer>
        </article>
      </main>
      <footer className="footer">
        <nav className="footer footer-nav">
          <img
            src={siteLogo}
            alt={altTextLogo}
          />
           <p className="footer-nav nav-title"><Link>Home</Link></p>
           <img className="footer-nav nav-img" src={homeIcon} alt={homeIconAltText} />
          <p className="footer-nav nav-title"><Link>Projects</Link></p>
          <img className="footer-nav nav-img" src={projectIcon} alt={projectIconAltText} />
          <p className="footer-nav nav-title"><Link>Chat</Link></p>
          <img className="footer-nav nav-img"/><Link src={chatIcon} alt={chatIconAltText} />
        </nav>
        <p className="footer footer-text">{footerText}</p>
      </footer>
    </>
  );
}
