import React, { FC } from 'react';
import './GlobalStyles.scss';

interface IGlobalStyles {
  children: JSX.Element;
}

const GlobalStyles: FC<IGlobalStyles> = ({ children }) => {
  return children;
};

export default GlobalStyles;
