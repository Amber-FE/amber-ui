import Icon from './icon/index'
import Price from './price/index'
import Button from './button/index'
import Coupon from './coupon/index'
import Tag from './tag/index'
import Tips from './tips/index'
import AmberDropdown from './dropdown/index'
import AmberDropdownItem from './dropdown-item/index'
import Pagination from './pagination/index'
import PicturePreview from './picture-preview/index'
import PictureRotation from './picture-rotation/index'
import PictureStretch from './picture-stretch/index'
import Input from './input/index'
import Radio from './radio/index'
import RadioGroup from './radio-group/index'
import RadioButton from './radio-button/index'
import Container from './container/index'
import Header from './header/index'
import Main from './main/index'
import Footer from './footer/index'
import Aside from './aside/index'
import Select from './select/index'
import SelectOption from './select-option/index'
import Space from './space/index'
import Switch from './switch/index'
import Modal from './modal/index'
import ModalBox from './modalBox/index'
import Divider from './divider/index'
import Notification from './notification/index'
import Row from './row/index'
import Col from './col/index'
import Form from './form/index'
import FormItem from './formItem/index'
import Checkbox from './checkbox/index'
import CheckboxGroup from './checkbox-group/index'
import Tree from './tree/index'
import DatePicker from './date-picker/index'
import TimeSelect from './time-select/index'
import TimePicker from './time-picker/index'
import InputNumber from './inputNumber'
import Rate from './rate/index'
import Card from './card/index'
import InfiniteScroll from './infinite-scroll/index'

const components = [
  Icon,
  Tips,
  Price,
  Button,
  Coupon,
  Tag,
  AmberDropdown,
  AmberDropdownItem,
  Pagination,
  PicturePreview,
  PictureRotation,
  PictureStretch,
  Input,
  Radio,
  RadioGroup,
  RadioButton,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Space,
  Select,
  SelectOption,
  Switch,
  Modal,
  Divider,
  Row,
  Col,
  Form,
  FormItem,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Tree,
  TimeSelect,
  TimePicker,
  InputNumber,
  Rate,
  Card
]
const directives = [InfiniteScroll]

const install = (Vue) => {
  if (install.installed) return
  directives.forEach((directive) => {
    Vue.directive(directive.name, directive)
  })
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  const vueCopy = Vue
  vueCopy.prototype.$success = ModalBox.success
  vueCopy.prototype.$warning = ModalBox.warning
  vueCopy.prototype.$info = ModalBox.info
  vueCopy.prototype.$error = ModalBox.error
  vueCopy.prototype.$confirm = ModalBox.confirm
  vueCopy.prototype.$notification = Notification
}

/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.3.6',
  install,
  ...components
}
