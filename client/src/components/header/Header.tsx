import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <p>Customize your pizza</p>
          <span className="amount">You will pay: $ 20,00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
