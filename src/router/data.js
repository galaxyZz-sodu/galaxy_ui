export default  [
    {
        path: '/badage',
        name: 'badage',
        component: () => import('@/components/data/Badage.vue'),
    },
    {
        path: '/paganation',
        name: 'paganation',
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
]