# LiquidAppShell

LiquidAppShell is a responsive desktop-sidebar/mobile-bottom-navigation layout.
It knows layout state only. Applications provide a fully authorized model and
translate the emitted `navigate` and `logout` events through an adapter.

```js
import Vue from 'vue'
import { createLiquidUI } from '@liqui/liquid-ui'
import { createLiquidAppShell } from '@liqui/liquid-app-shell'
import '@liqui/liquid-ui/styles.css'
import '@liqui/liquid-app-shell/styles.css'

Vue.use(createLiquidUI())
Vue.use(createLiquidAppShell())
```

```html
<liquid-app-shell :model="shellModel" @navigate="go" @logout="logout">
  <router-view />
</liquid-app-shell>
```

The shell never imports an application router, store, authorization service,
cookie, token, role constant, or API client. `npm test` enforces this boundary.
