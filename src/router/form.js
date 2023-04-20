export default [
    {
        path: '/checkbox',
        name: 'checkbox',
        component: () => import('@/components/form/Checkbox.vue'),
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('@/components/form/Input.vue'),
    },
    {
        path: '/inputNumber',
        name: 'inputNumber',
        component: () => import('@/components/form/InputNumber.vue'),
    },
    {
        path: '/radio',
        name: 'radio',
        component: () => import('@/components/form/Radio.vue'),
    },
    {
        path: '/rate',
        name: 'rate',
        component: () => import('@/components/form/Rate.vue'),
    },
    {
        path: '/select',
        name: 'select',
        component: () => import('@/components/form/Select.vue'),
    },
    {
        path: '/slider',
        name: 'slider',
        component: () => import('@/components/form/Slider.vue'),
    },
    {
        path: '/switch',
        name: 'switch',
        component: () => import('@/components/form/Switch.vue'),
    },
    {
        path: '/upload',
        name: 'upload',
        component: () => import('@/components/form/Upload.vue'),
    },
    {
        path: '/transfer',
        name: 'transfer',
        component: () => import('@/components/form/Transfer.vue'),
    },
]