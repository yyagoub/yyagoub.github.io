import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

export const routes = [
  {
    path: '/',
    labelKey: 'nav.home',
    showInSidebar: true,
    component: About,
    defaultRoute: true,
  },
  {
    path: '/platforms',
    labelKey: 'nav.platforms',
    showInSidebar: true,
    component: Projects,
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
