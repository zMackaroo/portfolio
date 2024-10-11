import { useState } from 'react';
import Logo from '../../Assets/Images/Logo2.svg';
import './Sidebar.scss';

function Sidebar() {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#work" className="nav__link">
                  <i className="icon-layers"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#testimonials" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

          <div className="nav__footer">
            <span className="copyright">@copyright 2024</span>
          </div>
      </aside>

      <div
        className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
}

export default Sidebar;
