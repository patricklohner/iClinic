import React from 'react';
import Cabecalho from '../pages/header';

const Header = ({ children }) => {
  return (
    <div>
      <Cabecalho />

      {children}
    </div>
  );
};

export default Header;