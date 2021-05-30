import VueRouter from 'vue-router';
import Home from '@/pages/home.vue';
import pages from '@/pages/index';
// 导入所有的页面
const children = new Array(pages.length);
pages.forEach((page) => {
	children.push({ path: page.path, component: page.component })
})

const routes = [
	{ path: '/', component: Home, children: children }
]
export default new VueRouter({
	routes
});