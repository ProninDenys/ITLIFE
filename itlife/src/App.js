import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        document.body.className = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return (
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <header className="header">
                <a href="/" className="header__logo">
                    <img src="img/logo.svg" alt="Logo" />
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">HOME</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">SERVICES</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">ABOUT</a>
                        </li>
                        <li className="header__nav-item">
                            <a href="#" className="header__nav-link">CONTACTS</a>
                        </li>
                    </ul>
                </nav>
                <button className="header__callback-btn" onClick={toggleTheme}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <main className="main">
                <section className="about">
                    <h2 className="about__title">WHO WE ARE</h2>
                    <p className="about__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="about__team">
                        <div className="team-member">
                            <img
                                src="img/team-item.svg"
                                alt="Alex Cutter"
                                className="team-member__photo"
                            />
                            <h3 className="team-member__name">Alex Cutter</h3>
                            <p className="team-member__role">Developer</p>
                        </div>
                        <div className="team-member">
                            <img
                                src="img/card.svg"
                                alt="Elena Simpson"
                                className="team-member__photo"
                            />
                            <h3 className="team-member__name">Elena Simpson</h3>
                            <p className="team-member__role">Artist</p>
                        </div>
                        <div className="team-member">
                            <img
                                src="img/photo.svg"
                                alt="Lily Allen"
                                className="team-member__photo"
                            />
                            <h3 className="team-member__name">Lily Allen</h3>
                            <p className="team-member__role">Graphic Designer</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <img src="img/logo.svg" alt="ITLIFE Logo" className="footer__logo" />
                <nav className="footer__nav">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">HOME</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">SERVICES</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">ABOUT</a>
                        </li>
                        <li className="footer__nav-item">
                            <a href="#" className="footer__nav-link">CONTACTS</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__socials">
                    <a href="https://www.twitter.com" target="_blank" className="footer__social-link">
                        <img src="img/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" className="footer__social-link">
                        <img src="img/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className="footer__social-link">
                        <img src="img/instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" className="footer__social-link">
                        <img src="img/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="https://www.telegram.org" target="_blank" className="footer__social-link">
                        <img src="img/telegram.svg" alt="Telegram" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default App;
