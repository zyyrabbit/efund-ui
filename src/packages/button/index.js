import DxButton from './src/button';
const getName = (comp) => (comp.options && comp.options.name) || comp.name;

/* istanbul ignore next */
DxButton.install = function(Vue) {
  Vue.component(getName(DxButton), DxButton);
};

export default DxButton;
