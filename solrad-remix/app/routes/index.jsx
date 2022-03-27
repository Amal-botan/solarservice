import {
  json,
  useLoaderData,
  Link,
  Form,
  redirect,
  useActionData,
  useTransition,
} from "remix";

export default function Index() {
  const transition = useTransition();
  const homeIcon = "images/icons/home-svgrepo-com.svg";
  const homeIconAltText = "home icon";
  const projectIcon = "images/icons/plan-svgrepo-com.svg";
  const projectIconAltText = "project icon";
  const chatIcon = "images/icons/comment-svgrepo-com.svg";
  const chatIconAltText = "chat icon";
  const siteLogo = "images/Social Icon Logo Only Zoom In.jpg";
  const altTextLogo = "SolRad logo";
  const loadingIcon = "images/icons/loading-svgrepo-com.svg";
  const loadingIconAltText = "loading icon";
  const heroTitle = "SolRad";
  const heroImage = "images/Social Icon Logo Only Zoom In.jpg";
  const heroImageAltText = "solar rad hero image";
  const heroText = "more than so rad; its solrad";
  const userName = "Meagan Sandler";
  const userHandle = "@Meagan224";
  const avatarAltText = "@Meagan224's avatar";
  const postTime = "21=39";
  const userAvatar = "images/icons/avatar-svgrepo-com.svg";
  const userStatus = "images/icons/status-waiting-svgrepo-com.svg";
  const userStatusAltText = "Meagan224 is Offline";
  const projectText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s; when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...";
  const projectTitle = "My Project";
  const projectImage = "images/Solar tile 5B.157.png";
  const projectImageAltText = "solar tile";
  const expandImage = "images/icons/expand-svgrepo-com.svg";
  const expandImageAltText = "expand for details";
  const commentProjectImage = "images/icons/comment-svgrepo-com.svg";
  const commentProjectImageAltText = "comment on this project";
  const shareProjectImage = "images/icons/share-svgrepo-com.svg";
  const shareProjectImageAltText = "share this project";
  const likeProjectImage = "images/icons/like-svgrepo-com.svg";
  const likeProjectImageAltText = "like this project";
  const favouriteProjectImage = "images/icons/favourite-star-svgrepo-com.svg";
  const favouriteProjectImageAltText = "favourite this project";
  const footerText =
    "Created By Keith Greensberg, Amall Sighn, Jacob Alibaster 2022";
  const purchaseProjectImage = "images/icons/buy-svgrepo-com.svg";
  const purchaseProjectImageAltText = "buy this project";
  const logoutIcon = "images/icons/logout-svgrepo-com.";
  const logoutIconAltText = "logout";
  const loginIcon = "images/icons/login-svgrepo-com.svg";
  const loginIconAltText = "login";

  return (
    <>
      <header className="header">
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
            <div>
              <p className="">
                <Link to="logout">logout</Link>
              </p>
              <img src={logoutIcon} alt={logoutIconAltText} />
            </div>
          ) : (
            <div>
              <p className="">
                <Link to="logout">logout</Link>
              </p>
              <img src={loginIcon} alt={loginIconAltText} />
            </div>
          )}
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
              src={projectImage}
              alt={projectImageAltText}
            />
            <p>{projectText}</p>
          </container>
          <footer className="main-project project-footer">
            {/* expand for full project details */}
            <img
              className="project-footer project-image"
              id="expand"
              src={expandImage}
              alt={expandImageAltText}
            />
            {/* comment on the project (may open a modal then redirects to project page after posting) */}
            <img
              className="project-footer project-image"
              src={commentProjectImage}
              id="comment"
              alt={commentProjectImageAltText}
            />
            {/* share the project, opens a modal with a link to the project page or just is a clipboard*/}
            <img
              className="project-footer project-image"
              src={shareProjectImage}
              id="share"
              alt={shareProjectImageAltText}
            />
            {/* like, interactive */}
            <img
              className="project-footer project-image"
              src={likeProjectImage}
              id="like"
              alt={likeProjectImageAltText}
            />
            {/* favourite */}
            <img
              className="project-footer project-image"
              src={favouriteProjectImage}
              id="favourite"
              alt={favouriteProjectImageAltText}
            />
            {/* purchase */}
            <img
              className="project-footer project-image"
              src={purchaseProjectImage}
              id="purchase"
              alt={purchaseProjectImageAltText}
            />
          </footer>
        </article>
      </main>
      <footer className="footer">
        <nav className="footer footer-nav">
          <img src={siteLogo} alt={altTextLogo} />
          <p className="footer-nav nav-title">
            <Link to="/">Home</Link>
          </p>
          <img
            className="footer-nav nav-img"
            src={homeIcon}
            alt={homeIconAltText}
          />
          <p className="footer-nav nav-title">
            <Link to="projects">Projects</Link>
          </p>
          <img
            className="footer-nav nav-img"
            src={projectIcon}
            alt={projectIconAltText}
          />
          <p className="footer-nav nav-title">
            <Link to="chat">Chat</Link>
          </p>
          <img
            className="footer-nav nav-img"
            src={chatIcon}
            alt={chatIconAltText}
          />
        </nav>
        <p className="footer footer-text">{footerText}</p>
      </footer>
    </>
  );
}
