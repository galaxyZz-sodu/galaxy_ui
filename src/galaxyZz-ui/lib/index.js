import pay from './others/pay';
import siderbar from './others/siderbar'
import button from './basic/button'
import input from './form/input'
import dialog from './others/dialog'
import Switch from './form/switch'
import upload from './form/upload'
import radio from './form/radio'
import checkbox from './form/checkbox'
import inputNumber from './form/inputNumber'
import select from './form/select'
import slider from './form/slider'
import progress from './data/progress'
import tag from './data/tag'
import badge from './data/badge'
import tree from './data/tree'
import pagination from './data/pagination'
import rate from './form/rate'
import table from './data/table'
import tableColunm from './data/tableColunm'
import magnifier from './others/magnifier'
import waterMark from './others/waterMark'
import carousel from './others/carousel'
import carouselItem from './others/carouseltem'
import step from './navigation/step'
import steps from './navigation/steps'
const galaxyUi = {
    install(Vue, options) {
        // 组件
        Vue.component('g-pay', pay);
        Vue.component('g-siderbar', siderbar);
        Vue.component('g-button', button);
        Vue.component('g-input', input);
        Vue.component('g-dialog', dialog);
        Vue.component('g-switch', Switch);
        Vue.component('g-radio', radio);
        Vue.component('g-checkbox', checkbox);
        Vue.component('g-input-number', inputNumber);
        Vue.component('g-select', select);
        Vue.component('g-slider', slider);
        Vue.component('g-progress', progress);
        Vue.component('g-tag', tag);
        Vue.component('g-badge', badge);
        Vue.component('g-tree', tree);
        Vue.component('g-pagination', pagination)
        Vue.component('g-rate', rate);
        Vue.component('g-table', table);
        Vue.component('g-table-column', tableColunm);
        Vue.component('g-magnifier', magnifier);
        Vue.component('g-carousel', carousel)
        Vue.component('g-carousel-item', carouselItem)
        Vue.component('g-steps', steps)
        Vue.component('g-step', step);
        Vue.component('g-upload', upload)
        // 自定义事件
        Vue.directive('waterMark', waterMark);
    }
};

export default galaxyUi;