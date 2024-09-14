<script lang="ts">
// Component made by World X
import type { PAGE_WIDTH } from '@/types/config.ts'
import { EXPAND_WIDTH, SHRINK_WIDTH } from '@constants/constants.ts'
import Icon from '@iconify/svelte'
import {
  applyPageWidth,
  getStoredWidth,
  setWidthSetting,
} from '@utils/setting-utils.ts'
import { onMount } from 'svelte'
const seq: PAGE_WIDTH[] = [SHRINK_WIDTH, EXPAND_WIDTH]
let width: PAGE_WIDTH = SHRINK_WIDTH

onMount(() => {
  width = getStoredWidth()
  applyPageWidth(width)
  setTimeout(myFunction, 1)
  function myFunction() {
    document.documentElement.classList.add('maximum-width-delay-gone')
  }
})

/*
onMount(() => {
  let width = getStoredWidth()  // Retrieve the stored width setting, like "compact" or "expanded"
  
  // Apply the current width setting to the document
  applyWidthToDocument(width)

  // Listen for window resize events to adjust the layout (if necessary)
  const adjustWidthOnResize: Parameters<typeof window.addEventListener<'resize'>>[1] = () => {
    // Optionally, auto-adjust based on window size or update UI
    applyWidthToDocument(width)
  }
  window.addEventListener('resize', adjustWidthOnResize)

  // Listen for width setting changes (could be from a button or switch in your app)
  const changeWidthWhenSettingChanged: Parameters<typeof document.addEventListener<'change'>>[1] = (e: Event) => {
    const newWidth = (e.target as HTMLInputElement).value  // Assuming it's from an input or switch
    width = newWidth
    applyWidthToDocument(width)
    storeWidthSetting(width)  // Store the user's new width setting
  }
  document.addEventListener('width-change', changeWidthWhenSettingChanged)

  // Cleanup: remove event listeners when the component is unmounted
  return () => {
    window.removeEventListener('resize', adjustWidthOnResize)
    document.removeEventListener('width-change', changeWidthWhenSettingChanged)
  }
})
*/

function switchWidth(newWidth: PAGE_WIDTH) {
  width = newWidth
  setWidthSetting(newWidth)
}

function toggleWidthSetting() {
  let i = 0
  for (; i < seq.length; i++) {
    if (seq[i] === width) {
      break
    }
  }
  switchWidth(seq[(i + 1) % seq.length])
}

function showPanel() {
  const panel = document.querySelector('#shrink-expand-panel')
  if (panel != null) panel.classList.remove('float-panel-closed')
}

function hidePanel() {
  const panel = document.querySelector('#shrink-expand-panel')
  if (panel != null) panel.classList.add('float-panel-closed')
}
</script>

<!-- z-50 make the panel higher than other float panels -->
<div class="relative z-50 hidden md:flex" role="menu" tabindex="-1" on:mouseleave={hidePanel}>
    <button aria-label="Light/Dark Mode" role="menuitem" class="relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90" id="width-setting-switch" on:click={toggleWidthSetting} on:mouseenter={showPanel}>
        <div class="absolute" class:opacity-0={width !== SHRINK_WIDTH}>
            <Icon icon="tdesign:shrink-horizontal" class="text-[1.25rem]"></Icon>
        </div>
        <div class="absolute" class:opacity-0={width !== EXPAND_WIDTH}>
            <Icon icon="tdesign:expand-horizontal" class="text-[1.25rem]"></Icon>
        </div>
    </button>

    <div id="shrink-expand-panel" class="hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5" >
        <div class="card-base float-panel p-2">
            <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={width === SHRINK_WIDTH}
                    on:click={() => switchWidth(SHRINK_WIDTH)}
            >
                <Icon icon="tdesign:shrink-horizontal" class="text-[1.25rem] mr-3"></Icon>
                Compacto
            </button>
            <button class="flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"
                    class:current-theme-btn={width === EXPAND_WIDTH}
                    on:click={() => switchWidth(EXPAND_WIDTH)}
            >
                <Icon icon="tdesign:expand-horizontal" class="text-[1.25rem] mr-3"></Icon>
                Expandido
            </button>
        </div>
    </div>
</div>