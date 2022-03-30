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
  const heroText = "more than so rad, its solrad";
  const userName = "Meagan Sandler";
  const userHandle = "@Meagan224";
  const avatarAltText = "@Meagan224's avatar";
  const postTime = "21:39";
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
  const logoutIcon = "images/icons/logout-svgrepo-com.svg";
  const logoutIconAltText = "Logout";
  const loginIcon = "images/icons/login-svgrepo-com.svg";
  const loginIconAltText = "Login";
  const searchIcon = "images/icons/search-svgrepo-com.svg";
  const searchIconAltText = "search";
  let userLoggedIn = true;
  const divClass = `bg-[url(${heroImage})]`
  return (
    <>
      <header className="header">
        <nav className="header header-nav flex flex-row justify-between bg-gray-600 text-white">
          <img className="w-12 h-12 rounded-full mx-4" src={siteLogo} alt={altTextLogo} />
          <div className="flex">
          <span className="header-nav span-nav mx-4">
            <img
              className="span-nav nav-img w-8 h-8 ml-2"
              src={homeIcon}
              alt={homeIconAltText}
            />
            <p className="span-nav nav-title">
              <Link to="/">Home</Link>
            </p>
          </span>
          <span className="header-nav span-nav mx-4">
            <img
              className="span-nav nav-img w-8 h-8 ml-3"
              src={projectIcon}
              alt={projectIconAltText}
            />
            <p className="span-nav nav-title">
              <Link to="projects">Projects</Link>
            </p>
          </span>
          <span className="header-nav span-nav mx-4">
            <img
              className="span-nav nav-img w-8 h-8"
              src={chatIcon}
              alt={chatIconAltText}
            />
            <p className="span-nav nav-title">
              <Link to="chat">Chat</Link>
            </p>
          </span>

          <Form method="post">
               <label className="header-nav nav-label flex flex-row border-white mt-4 w-4 h-4 mx-3">
              <img className="w-4 h-4" src={searchIcon} alt={searchIconAltText} />
              <input
                className="header-nav nav-input text-white bg-inherit border-1"
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
          </div>
            
           
          {userLoggedIn ? (
            <div className="header-nav div-nav">
              <img className="div-nav div-img w-8 h-8 ml-3" src={logoutIcon} alt={logoutIconAltText} />
              <p className="header-nav div-nav" >
                <Link to="logout">Logout</Link>
              </p>
            </div>
          ) : (
            <div className="header-nav div-nav">
              <img className="div-nav nav-img w-8 h-8 ml-3" src={loginIcon} alt={loginIconAltText} />
              <p className="div-nav nav-text">
                <Link to="logout">Logout</Link>
              </p>
            </div>
          )}
        </nav>
        <container className="hero-container flex flex-col">
          <div className="bg-[url('images/Social Icon Logo Only Zoom In.jpg')] ring-red-600 border-2">
          <h1 className="hero-container hero-container-title text-center text-6xl font-bold font-mono z-0 ">{heroTitle}</h1>
          <div className="hero-container flex justify-center">
          <img
            className="hero-container hero-container-image h-auto rounded-full"
            src={heroImage}
            alt={heroImageAltText}
          />
          </div>
          <aside className="hero-container hero-container-aside">
            <p className="hero-container-aside hero-aside-text">{heroText}</p>
          </aside>
          </div>
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
            {/* purchase have logo animation */}
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
