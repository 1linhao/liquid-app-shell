import { flattenNavigation } from './contracts.js'

export const LiquidMobileNav = {
  name: 'LiquidMobileNav',
  props: { model: { type: Object, required: true } },
  computed: {
    items() {
      const byKey = new Map(flattenNavigation(this.model).map((item) => [item.key, item]))
      return this.model.mobileKeys.map((key) => byKey.get(key)).filter(Boolean)
    }
  },
  methods: {
    navigate(item) {
      if (!item.disabled) this.$emit('navigate', item.key)
    }
  },
  render(h) {
    return h('nav', {
      class: ['liquid-shell__mobile-nav', { 'is-scrollable': this.items.length > 5 }],
      attrs: { 'aria-label': 'Mobile navigation' }
    }, this.items.map((item) => h('button', {
      key: item.key,
      class: ['liquid-shell__mobile-item', { 'is-active': item.key === this.model.activeKey }],
      attrs: { type: 'button', disabled: item.disabled, 'aria-current': item.key === this.model.activeKey ? 'page' : null },
      on: { click: () => this.navigate(item) }
    }, [
      item.icon ? h('span', { class: 'liquid-shell__mobile-icon', attrs: { 'data-icon': item.icon, 'aria-hidden': 'true' } }) : null,
      h('span', item.mobileLabel)
    ])))
  }
}
