export default [
    {
        path: '/steps',
        name: 'steps',
        component: () => import('@/components/navigation/Steps.vue'),
    },
    {
        path: '/breadcrumb',
        name: 'breadcrumb',
        component: () => import('@/components/navigation/Crumb.vue'),
    },
    
    {
        path: '/pageHeader',
        name: 'pageHeader',
        component: () => import('@/components/navigation/PageHeader.vue'),
    },
]