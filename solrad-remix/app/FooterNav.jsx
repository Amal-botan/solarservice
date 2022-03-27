import {Link} from 'remix'

export default function FooterNav() {
  const siteLogo = ""
  const altTextLogo = "logo for SolRad"
  return (
    <nav className="footer footer-nav">
    <img
      src={siteLogo}
      alt={altTextLogo}
    />
    <p className="footer-nav nav-title"><Link>Home</Link></p>
    <p className="footer-nav nav-title"><Link>Projects</Link></p>
    <p className="footer-nav nav-title"><Link>Chat</Link></p>
  </nav>
  )
}
