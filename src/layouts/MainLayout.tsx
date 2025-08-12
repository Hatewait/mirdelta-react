import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../routes/Providers/ScrollToTop.tsx';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';

const MainLayout: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main><Outlet /></main>
            <Footer />
        </>
    );
};

export default MainLayout;
