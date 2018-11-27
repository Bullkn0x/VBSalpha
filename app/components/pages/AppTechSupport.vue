<template>
<div>
  <div class="tech-support-app-container">
    <webview
      class="tech-support-app"
      v-if="loggedIn"
      id="appTechWebview"
      :src="TechSupportURL"
      ref="appTechWebview"
      preload="bundles/guest-api">
    </webview>
  </div>
</div>
</template>

<script lang="ts" src="./AppTechSupport.vue.ts"></script>

<style lang="less" scoped>
.tech-support-app-container {
  position: absolute;
  top: -1px;
  right: 0;
  bottom: 0;
  left: 0;
}

.tech-support-app {
  position: absolute;
  top: -2px;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
