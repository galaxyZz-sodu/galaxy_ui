// import pay from './others/pay';
// import siderbar from './others/siderbar'
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
import breadcrumb from './navigation/breadcrumb'
import breadcrumbItem from './navigation/breadcrumbItem'
import pageHeader from './navigation/pageHeader'
import popover from './others/popover'
import descriptions from './data/descriptions'
import descriptionsItem from './data/descriptionsItem'

    function install(Vue, options) {
        // 组件
        // Vue.use('g-pay', pay);
        // Vue.use('g-siderbar', siderbar);
        Vue.use(button);
        Vue.use(input);
        Vue.use( dialog);
        Vue.use(Switch);
        Vue.use(radio);
        Vue.use(checkbox);
        Vue.use(inputNumber);
        Vue.use(select);
        Vue.use(slider);
        Vue.use(progress);
        Vue.use(tag);
        Vue.use(badge);
        Vue.use(tree);
        Vue.use(pagination)
        Vue.use(rate);
        Vue.use(table);
        Vue.use(tableColunm);
        Vue.use(magnifier);
        Vue.use(carousel)
        Vue.use(carouselItem)
        Vue.use(steps)
        Vue.use(step);
        Vue.use(upload);
        Vue.use(breadcrumb);
        Vue.use(breadcrumbItem);
        Vue.use(pageHeader);
        Vue.use(popover);
        Vue.use(descriptions);
        Vue.use(descriptionsItem)
        // 自定义事件
        Vue.use(waterMark);
    }
    if(window && window.Vue) {
        Vue.use(install)
      }

export default install;