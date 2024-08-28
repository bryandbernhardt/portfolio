import en from './en.json'
import pt from './pt.json'
import es from './es.json'

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    legacy: false,
    messages: {
      en,
      pt,
      es
    }
  }
})