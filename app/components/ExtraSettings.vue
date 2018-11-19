<template>
<div>
  <div class="section">
    <div class="section-content">
      <p>{{ $t('If you are experiencing issues with VBS, try clearing your cache.  This will result in losing your settings but may fix some stability issues.')}}</p>
      <div class="input-container">
        <a class="link" @click="showCacheDir">
          <i class="icon-view" /> <span>{{ $t('Show VBS Cache')}}</span>
        </a>
      </div>
      <div class="input-container">
        <a class="link" @click="deleteCacheDir">
          <i class="icon-trash" /> <span>{{ $t('Clear VBS Cache') }}</span></a>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section-content">
      <div class="input-container">
        <p>{{ $t('Having issues with VBS? Want to discuss streaming tips with other creators? Join our Discord!')}}</p>
        <button class="button button--default" @click="openDiscord">
          {{ $t('Join Discord') }}
        </button>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section-content">
      <ObsBoolInput :value="streamInfoUpdateModel" @input="setStreamInfoUpdate" />
      <div class="input-container">
        <button class="button button--default" @click="restartStreamlabelsSession">
          {{ $t('Restart VBS labels') }}
        </button>
      </div>
      <div class="input-container" v-if="isTwitch && !isRecordingOrStreaming">
        <button class="button button--default" @click="runAutoOptimizer">
          {{ $t('Run Auto Optimizer') }}
        </button>
      </div>  
    </div>
  </div>
</div>
</template>

<script lang="ts" src="./ExtraSettings.vue.ts"></script>
