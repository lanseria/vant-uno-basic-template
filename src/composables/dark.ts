import { StyleProvider, Themes } from '@varlet/ui'

export const theme = ref<'light' | 'dark'>('light')
export const isDark = useDark({
  onChanged(dark: boolean) {
    if (dark) {
      // 设置为暗黑主题
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      theme.value = 'dark'
      StyleProvider(Themes.dark)
    }
    else {
      // 恢复亮色主题
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      theme.value = 'light'
      StyleProvider(null)
    }
  },
})

export const toggleDark = useToggle(isDark)
