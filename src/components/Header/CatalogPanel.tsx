import React, { useEffect, useRef } from 'react';
import './CatalogPanel.css';
import type { ButtonRef } from './Header.types.ts';
import { CATEGORIES } from '../../constants/nav.ts';
import { Link } from 'react-router-dom';

type CatalogPanelProps = {
  buttonRef: ButtonRef;
  isOpen: boolean;
  handleCloseCatalog: () => void;
}

const CatalogPanel: React.FC<CatalogPanelProps> = ({ buttonRef, isOpen, handleCloseCatalog }) => {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (!panelRef.current?.contains(target) && !buttonRef?.current?.contains(target)) {
        handleCloseCatalog();
      }
    }
    document.addEventListener('mousedown', onDocumentClick);
    return () => document.removeEventListener('mousedown', onDocumentClick)
  }, [isOpen, handleCloseCatalog, buttonRef])

  return (
    <section className="catalog-menu py-4"
             data-catalog="menu"
             data-open="false"
             aria-hidden="true"
             ref={panelRef}>
      <div className="container">
        <div className="catalog-menu__grid">

          {
            CATEGORIES.map(({title, type, src}) =>
              type === 'category' ? (
                <Link to="#" className="catalog-menu__item">
                  <div className="catalog-menu__pic">
                    <img src={src} alt={title} />
                  </div>
                  <span className="catalog-menu__title text-2 text-center">{title}</span>
                </Link>
              ) : (
                <div className="catalog-menu__stub" aria-hidden="true">
                  <img src={src} alt="Banner" />
                </div>
              )
            )}

        </div>
      </div>
    </section>
  );
};

export default CatalogPanel;
