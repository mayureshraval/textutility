import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Navbar(props) {
  const location = useLocation();
  const currentPage = location.pathname === '/'? true: false;

  const {theme, darkMode , themeInvert} = props;
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${theme} text-${themeInvert}`}>
        <div className="container-fluid">
          <a className={`navbar-brand  text-${themeInvert}`} href="/">Text Utility</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${currentPage === true ? 'active':''} text-${themeInvert} `}  aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${currentPage === true ? '':'active'} text-${themeInvert}`} to="/about">About</Link>
              </li>
            </ul>
          </div>
          {/* toggle */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={darkMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
          {/* toggle */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar