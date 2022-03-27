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
    homeIcon: "../../public/images/icons/home-svgrepo-com.svg",
    homeIconAltText: "home icon",
    projectIcon: "../../public/images/icons/plan-svgrepo-com.svg",
    projectIconAltText: "project icon",
    chatIcon: "../../public/images/icons/comment-svgrepo-com.svg",
    chatIconAltText: "chat icon",
    siteLogo: "../../public/images/Social Icon Logo Only Zoom In.jpg",
    altTextLogo: "SolRad logo",
    loadingIcon: "../../public/images/icons/loading-svgrepo-com.svg",
    loadingIconAltText: "loading icon",
    heroTitle: "SolRad",
    heroImage: "../../public/images/Social Icon Logo Only Zoom In.jpg",
    heroImageAltText: "solar rad hero image",
    heroText: "more than so rad, its solrad",
    userName: "Meagan Sandler",
    userHandle: "@Meagan224",
    avatarAltText: "@Meagan224's avatar",
    postTime: "21:39",
    userAvatar: "../../public/images/icons/avatar-svgrepo-com.svg",
    userStatus: "../../public/images/icons/status-waiting-svgrepo-com.svg",
    userStatusAltText: "Meagan224 is Offline",
    projectText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...",
    projectImage: "../../public/images/Solar tile 5B.157.png",
    projectImageAltText: "solar tile",
    expandImage: "../../public/images/icons/expand-svgrepo-com.svg",
    expandImageAltText: "expand for details",
    commentProjectImage: "../../public/images/icons/comment-svgrepo-com.svg",
    commentProjectImageAltText: "comment on this project",
    shareProjectImage: "../../public/images/icons/share-svgrepo-com.svg",
    shareProjectImageAltText: "share this project",
    likeProjectImage: "../../public/images/icons/like-svgrepo-com.svg",
    likeProjectImageAltText: "like this project",
    favouriteProjectImage: "../../public/images/icons/favourite-star-svgrepo-com.svg",
    favouriteProjectImageAltText: "favourite this project",
    footerText: "Created By Keith Greensberg, Amall Sighn, Jacob Alibaster 2022",
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
