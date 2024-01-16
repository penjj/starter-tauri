import { router } from './router'
import App from '@/App.vue'

import 'virtual:uno.css'
import './styles.css'

createApp(App).use(router).mount('#app')
