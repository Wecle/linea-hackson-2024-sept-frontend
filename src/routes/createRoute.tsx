import { createBrowserRouter } from 'react-router-dom';

import Overview from '@/page/Overview/Overview';
import Profile from '@/page/Profile/Profile';
import App from '@/page/Root/app';
import Store from '@/page/Store/Store';
import NarutoVotePoll from '@/page/VotePoll/NarutoVotePoll/NarutoVotePoll';

const createMyRouterContent = () => {
    const rootRoutersList = [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Overview />,
                },
                {
                    path: '/vote-for-naruto',
                    element: <NarutoVotePoll />,
                },
                {
                    path: '/profile',
                    element: <Profile />,
                },
                {
                    path: '/store',
                    element: <Store />,
                },
            ],
        },
    ];

    return rootRoutersList;
};

const router = createBrowserRouter(createMyRouterContent());

export default router;
