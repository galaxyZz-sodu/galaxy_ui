import waterMark from "./waterMark";
export default function(Vue) {
    // Vue.component('g-popover', popover);
    Vue.directive('waterMark', waterMark);
}