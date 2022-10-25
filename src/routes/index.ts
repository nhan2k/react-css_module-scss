import { FC, ReactNode } from 'react';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

interface IRoutes {
  path: string;
  component: FC<any>;
  layout?: FC<any> | null;
}

const publicRoutes: IRoutes[] = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes: IRoutes[] = [];

export { publicRoutes, privateRoutes };
