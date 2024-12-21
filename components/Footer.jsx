import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
            <p>Visos teisės saugomos © {new Date().getFullYear()} - EDUinf</p>
        </aside>
    </footer>
  );
};

export default Footer;