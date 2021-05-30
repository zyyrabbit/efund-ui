import Vue from 'vue'
import DxShowCode from './dx-show-code.vue'
import DxTable from './table/dx-table.vue'
import DxTableColumn from './table/dx-table-column.js'
import DxHeading from './dx-heading.vue'

const components = [
	DxHeading,
	DxShowCode,
	DxTable,
	DxTableColumn,
]

components.map(component => {
	Vue.component(component.name, component)
})

