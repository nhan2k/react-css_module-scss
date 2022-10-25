import React, { FC, ReactNode } from 'react';
import Header from './Header';

interface IHeaderOnly {
  children: JSX.Element;
}

const HeaderOnly: FC<IHeaderOnly> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
