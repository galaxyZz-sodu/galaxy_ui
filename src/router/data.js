export default  [
    {
        path: '/badage',
        name: 'badage',
        component: () => import('@/components/data/Badage.vue'),
    },
    {
        path: '/pagination',
        name: 'pagination',
        component: () => import('@/components/data/Pagination.vue'),
    },
    {
        path: '/progress',
        name: 'progress',
        component: () => import('@/components/data/Progress.vue'),
    },
    {
        path: '/tag',
        name: 'tag',
        component: () => import('@/components/data/Tag.vue'),
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('@/components/data/Tree.vue'),
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('@/components/data/Table.vue'),
    },
]