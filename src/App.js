import "./styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faBell,
  faList
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="side-menu">
        <div className="container-toggle">
          <div className="logo-toggle"><FontAwesomeIcon icon={faList} /></div>
          <div className="app-name">StreamingApp</div>
        </div>
      </div>
      <div className="main-section">
        <div className="search-bar">
          <div className="container-input-search">
            <input
              type="search"
              className="search"
              placeholder="Rechercher..."
            />
            {/* <button type="submit" className="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
          </div>
          <div className="logo">
            <FontAwesomeIcon icon={faVideo} className="icons" />
            <FontAwesomeIcon icon={faBell} className="icons" />
            <span className="avatar">
              <span className="text">m</span>
            </span>
          </div>
        </div>
        <nav className="navigation-container">
          <ul className="navigation">
            <li className="navigation-item">Toutes cathegorie</li>
            <li className="navigation-item">Drame</li>
            <li className="navigation-item">Comédie</li>
            <li className="navigation-item">Policier</li>
            <li className="navigation-item">Science</li>
            <li className="navigation-item">Fiction jeunesse</li>
            <li className="navigation-item">Histoire</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
