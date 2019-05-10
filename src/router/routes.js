const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'holidays', component: () => import('pages/Holidays.vue') },
      { path: 'add', component: () => import('pages/AddHoliday.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'edit', component: () => import('components/EditHoliday.vue') },
      { path: 'start', component: () => import('pages/OnBoard.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
