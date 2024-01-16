// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
import type { GlobalComponents } from 'vue'

export {}
declare global {
  /**
   * 全局自动导入组件的实例类型，解决组件自动导入后，组件类型仍需要手动导入的问题
   *
   * @example
   * ```vue
   * <template>
   *   <el-dialog ref="dialogRef" />
   * </template>
   *
   * <script lang="ts" setup>
   *   const dialogRef = ref<CompIns['ElDialog']>()
   *
   *   dialogRef.show()
   * </script>
   * ```
   */
  type CompIns = {
    [k in keyof GlobalComponents]: InstanceType<GlobalComponents[k]>
  }
}
