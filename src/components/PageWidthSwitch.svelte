<script lang="ts">
// Component made by World X
import type { PAGE_WIDTH } from '@/types/config.ts'
import { EXPAND_WIDTH, SHRINK_WIDTH } from '@constants/constants.ts'
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
})
</script>