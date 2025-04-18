import { createApp } from 'vue';
import MyButton from './components/MyButtonWidget.vue';
import style from './MyButtonWidget.module.css?inline';

function injectStyle(css) {
    if (typeof document !== 'undefined') {
        const styleEl = document.createElement('style');
        styleEl.appendChild(document.createTextNode(css));
        document.head.appendChild(styleEl);
    }
}

function mount(el, props) {
    injectStyle(style);
    createApp(MyButton, props).mount(el);
}

// Expose to global window object
if (typeof window !== 'undefined') {
    window.MyButtonWidgetLib = { mount };
}