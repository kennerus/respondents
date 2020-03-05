import Layout from '../views/Layouts/Layout';

export const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: Layout,
    redirect: '/polls/create',
    children: [
      {
        path: '/profile/:id',
        name: 'profile',
        component: () => import('../views/Profile/Profile'),
      },
      {
        path: '/polls',
        name: 'polls',
        component: () => import('../views/Polls/Polls'),
        children: [
          {
            path: 'create',
            name: 'pollsCreate',
            component: () => import('../views/Polls/PollsCreate'),
          },
          {
            path: 'edit/:id',
            name: 'pollsEdit',
            component: () => import('../views/Polls/PollsEdit'),
          },
        ]
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('../views/Users/Users'),
      },
      {
        path: '/black-lists',
        name: 'blackLists',
        component: () => import('../views/BlackLists/BlackLists'),
      },
      {
        path: '/call-center',
        name: 'callCenter',
        component: () => import('../views/CallCenter/CallCenter'),
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('../views/Help/Help'),
      },
    ]
  },
];