# 📦 MyButtonWidgetLib

A lightweight, embeddable Vue 3 component that renders a customizable button, intended for easy integration into third-party applications via a simple `<script>` tag.

---

## 🚀 Features

- Built with **Vue 3**.
- **Self-contained**: No external styles or dependencies required (except Vue, which must be provided by the host).
- **Customizable** via props.
- **Virtual DOM** rendering for optimal performance.
- **UMD bundle** for easy integration anywhere (plain HTML, WordPress, Shopify, etc.).
- Styles are **scoped** to prevent conflicts with host app styles.

---

## 📦 Installation
Example of loading from a hosted version:

```html
<script src="https://your-cdn.com/my-button-widget.umd.js"></script>
```

---

## 🛠 Usage Example

```html
<div id="my-widget-container"></div>

<script>
  // Wait until the widget script is loaded
  document.addEventListener('DOMContentLoaded', function() {
    MyButtonWidgetLib.mount('#my-widget-container', {
      label: 'Click Me!',
      message: 'Hello from embedded widget!'
    });
  });
</script>
```

**Props:**
| Name | Type | Description | Default |
|:-----|:-----|:------------|:--------|
| `label` | `String` | Button text | `'Click Me!'` |
| `message` | `String` | Message printed on click | `'Hello from Widget'` |

---

## ⚙️ Development Setup

```bash
npm install
npm run dev
```

## 🛠 Build for Production

```bash
npm run build
```

The built assets will be available in the `dist/` folder, mainly:

- `my-button-widget.umd.js`

No separate CSS file is generated — styles are embedded inside the JavaScript bundle.

---

## 🧠 Usage of Virtual DOM

This component leverages **Vue 3**, which internally uses a **Virtual DOM** architecture.

**Why use Virtual DOM?**
- **Efficiency**: Instead of manipulating the real DOM directly (which is slow), Vue builds an in-memory Virtual DOM and calculates the minimal necessary updates.
- **Predictability**: The component declaratively describes what the UI should look like at any time, leading to more understandable and maintainable code.
- **Performance Optimization**: Vue’s diffing algorithm ensures only changed parts of the DOM are updated, avoiding unnecessary re-rendering.

> ✅ By using Vue 3, Virtual DOM benefits are automatically inherited, making the widget efficient and safe to embed in third-party host applications without risk of interfering with the host’s DOM.

---

## 🧹 Styling and Isolation

- All styles are scoped within the component using Vue’s `<style scoped>` mechanism.
- No CSS leakage or conflicts with the host app styles.
- No separate `.css` file is generated — styles are injected into the document at runtime with the widget.

---

## Run Test using Vitest

```bash
npm run test
```

---

