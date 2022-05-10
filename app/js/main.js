import mobileMenu from "./modules/menu";
import tagCloud from './modules/tagCloud';
import informer from './modules/informer'


window.addEventListener('DOMContentLoaded', () => {
    mobileMenu('.header', '.nav-btn', '.header-nav__list');
    informer('.informer--js');
    tagCloud();
});
