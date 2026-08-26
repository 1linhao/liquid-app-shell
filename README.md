# LiquidAppShell

LiquidAppShell 是可复用的响应式应用布局：桌面使用侧边导航和顶部栏，移动端使用分段式底部导航。它只理解布局模型，不读取 Router、Vuex、权限、Cookie、Token 或业务接口。

## 安装

```sh
pnpm add @liqui/liquid-ui @liqui/liquid-app-shell vue@2
```

```js
import Vue from 'vue'
import { createLiquidUI } from '@liqui/liquid-ui/vue2'
import { createLiquidAppShell } from '@liqui/liquid-app-shell'
import '@liqui/liquid-ui/styles.css'
import '@liqui/liquid-app-shell/styles.css'

Vue.use(createLiquidUI())
Vue.use(createLiquidAppShell())
```

## 使用

```vue
<liquid-app-shell :model="shellModel" @navigate="handleNavigate" @logout="handleLogout">
  <template #header-actions>页面操作</template>
  <router-view />
</liquid-app-shell>
```

```js
const shellModel = {
  brand: { name: 'Acme', mark: 'A', subtitle: 'CONTROL CENTER' },
  title: '账号管理',
  activeKey: 'accounts',
  navGroups: [{
    key: 'manage',
    label: '管理',
    items: [{ key: 'accounts', label: '账号管理', mobileLabel: '账号', icon: 'user' }]
  }],
  mobileKeys: ['accounts'],
  user: { name: 'operator', initials: 'OP' },
  busy: false
}
```

调用方必须先完成权限过滤。Shell 点击导航时只发出 `navigate(key)`，点击退出时只发出 `logout`；路由跳转和注销请求由宿主 Adapter 转换。

扩展插槽包括 `header-start`、`header-actions`、`user-summary`、`brand` 和 `navigation-item`。

## 开发与验证

```sh
pnpm install
pnpm check
npm pack --dry-run
```

契约测试会确保 Shell 不导入应用路由、状态仓库、授权模块、API 或 Cookie。许可证为 MIT。
