import Vue from 'vue'
import {
  Button,
  Input,
  Icon,
  Form,
  Checkbox
} from 'ant-design-vue'

export const antd = () => {
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Icon)
  Vue.use(Form)
  Vue.use(Checkbox)
}
