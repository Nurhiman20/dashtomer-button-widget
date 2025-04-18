import { createApp } from 'vue';
import MyButton from './MyButtonWidget.vue';

function mount(el, props) {
    createApp(MyButton, props).mount(el);
}

// Expose to global window object
if (typeof window !== 'undefined') {
    window.MyButtonWidgetLib = { mount };
}