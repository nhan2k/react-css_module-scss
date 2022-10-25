import React, { FC } from 'react';
import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/components/Sidebar';

interface IDefaultLayout {
  children: JSX.Element;
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
