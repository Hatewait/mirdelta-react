import React from 'react';
import type { ButtonRef, HeaderNavItem } from './Header.types.ts';
import { Link } from 'react-router-dom';

type HeaderNavProps = {
  items: HeaderNavItem[];
  buttonRef: ButtonRef;
  isOpen: boolean;
  onClick: () => void;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ items, onClick, isOpen, buttonRef }) => {
  return (
    <nav className="header__nav" aria-label="Главное меню">
      <ul className="header__nav-list d-none d-xl-flex gap-xl-3">
        {
          items.map(({ text, linkTo, isButton}) => {
            return (
              <li key={text} className="header__nav-item">
                {isButton
                  ? <button className="btn-reset header__nav-link color-black text-2"
                            ref={buttonRef}
                            onClick={onClick}
                            type="button"
                            data-nav="catalog-trigger"
                            aria-expanded={isOpen}>
                    {text}
                  </button>
                : <Link to={linkTo} className="header__nav-link color-black text-2">
                    {text}
                  </Link>}
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default HeaderNav;
