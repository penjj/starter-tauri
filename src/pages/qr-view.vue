<script lang="ts" setup>
import { QrCode } from '@qrcode-tiny/vue'

const value = 'http://localhost:3000'
</script>

<template>
  <QrCode :text="value" />
</template>
