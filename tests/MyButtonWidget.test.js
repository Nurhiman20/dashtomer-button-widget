import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import MyButtonWidget from '../src/MyButtonWidget.vue';

describe('MyButtonWidget', () => {
    // The component renders correctly.
    it('renders the component without crashing', () => {
        const wrapper = mount(MyButtonWidget);
        expect(wrapper.exists()).toBe(true);
    });

    // The button appears as expected.
    it('displays a button element', () => {
        const wrapper = mount(MyButtonWidget);
        const button = wrapper.find('button');
        expect(button.exists()).toBe(true);
        expect(button.text()).toBe('Click me'); // Default label
    });

    // Clicking the button prints the expected message.
    it('prints the correct message when button is clicked', async() => {
        console.log = vi.fn(); // mock console.log

        const wrapper = mount(MyButtonWidget, {
            props: {
                onClickMessage: 'Hello from Test!'
            }
        });

        const button = wrapper.find('button');
        await button.trigger('click');

        expect(console.log).toHaveBeenCalledWith('Hello from Test!');
    });

    // The component correctly handles different messages passed via props.
    it('handles different messages passed via props', async() => {
        console.log = vi.fn();

        const wrapper = mount(MyButtonWidget, {
            props: {
                onClickMessage: 'Another Message!'
            }
        });

        const button = wrapper.find('button');
        await button.trigger('click');

        expect(console.log).toHaveBeenCalledWith('Another Message!');
    });
});