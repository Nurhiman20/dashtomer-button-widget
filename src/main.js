import { createApp } from 'vue'
import MyButtonWidget from './components/MyButtonWidget.vue'

function mount(el, props) {
    createApp(MyButtonWidget, props).mount(el)
}

window.MyButtonWidgetLib = { mount }