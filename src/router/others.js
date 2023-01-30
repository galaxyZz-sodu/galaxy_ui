export default [
    {
        path: '/carousel',
        name: 'carousel',
        component: () => import('@/components/others/Carousel.vue'),
    },
    {
        path: '/dialog',
        name: 'dialog',
        component: () => import('@/components/others/Dialog.vue'),
    },
    {
        path: '/magnifier',
        name: 'magnifier',
        component: () => import('@/components/others/Magnifier.vue'),
    },
    {
        path: '/popover',
        name: 'popover',
        component: () => import('@/components/others/Popover.vue'),
    },
    {
        path: '/waterMark',
        name: 'waterMark',
        component: () => import('@/components/others/WaterMark.vue'),
    },

]