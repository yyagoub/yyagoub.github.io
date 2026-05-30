import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import Contact from '../pages/Contact.jsx';

export const routes = [
  {
    path: '/',
    labelKey: 'nav.home',
    showInSidebar: true,
    component: Home,
    defaultRoute: true,
  },
  {
    path: '/about-me',
    labelKey: 'nav.aboutMe',
    showInSidebar: true,
    component: AboutMe,
  },
  {
    path: '/portfolio',
    labelKey: 'nav.portfolio',
    showInSidebar: true,
    component: Portfolio,
  },
  {
    path: '/contact',
    labelKey: 'nav.contact',
    showInSidebar: true,
    component: Contact,
  },
];

function getRoutes() {
  return routes.map((route) => (
    <Route path={route.path} element={<route.component />} key={route.path} />
  ));
}

export default function Routes() {
  return (
    <RouterRoutes>
      {getRoutes()}
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
}
