import Vue from 'vue';
import DxButton from '@/packages/button/index.js';

const getName = (comp) => (comp.options && comp.options.name) || comp.name;

const components = [
	DxButton
]

const install = function(Vue) {
	// 判断是否已经注册，如果已经注册则返回
	components.forEach(component => {
		Vue.component(getName(component), component);
	})
}

// 注册vue组件
if (typeof window !== 'undefined' && Vue) {
  install(Vue);
};

export default {
	install,
	DxButton
}
