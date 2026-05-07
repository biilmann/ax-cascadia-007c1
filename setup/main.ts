import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(() => {
  if (typeof window === 'undefined') return

  // Slidev's Goto dialog (`g` key) only closes when focus moves out of it.
  // Clicks on the slide background don't change `document.activeElement`,
  // so the panel stays open. Patch this: any pointer-down outside the
  // dialog dispatches Escape to its input, which calls close().
  window.addEventListener('pointerdown', (e) => {
    const dialog = document.getElementById('slidev-goto-dialog')
    if (!dialog) return
    if (dialog.classList.contains('-top-20')) return // hidden
    if (dialog.contains(e.target as Node)) return // click was inside
    const input = dialog.querySelector('input') as HTMLInputElement | null
    if (!input) return
    input.focus()
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
  }, true)
})
