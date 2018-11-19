<template>
  <div class="loader">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  	 viewBox="0 0 280 231" style="enable-background:new 0 0 280 231;" xml:space="preserve">
    <path class="st0" d="M123.1,108.43l21.19-52.75L160.85,62l-8-31-8-31L118.18,17.74,91.52,35.47l15.78,6.05c-10.43,28.12-17.67,47.6-25.37,67.82a26.53,26.53,0,0,1-5.74,9.38A29.14,29.14,0,0,1,44.25,127c26.74,27.29,63,21.08,78.85-18.52Z">
      <animate
              dur="3s"
              values="#32C3A2;
                      #8736E0;
                      #FFC803;
                      #32C3A2;"
              keyTimes="0; .33; .66; 1"
              attributeName="fill"
              repeatCount="indefinite"/>
      </path>
    <path class="st1" d="M63,114.73h0a22.88,22.88,0,0,0,8.36-31.19L42.6,34.15a22.94,22.94,0,0,0-31.19-8.36h0A22.88,22.88,0,0,0,3.06,57l28.78,49.39A22.94,22.94,0,0,0,63,114.73Z">
      <animate
              dur="3s"
              values="#8736E0;
                      #FFC803;
                      #32C3A2;
                      #32C3A2;"
              keyTimes="0; .33; .66; 1"
              attributeName="fill"
              repeatCount="indefinite"/>
      </path>

    </svg>
  </div>
</template>

<script lang="ts" src="./CustomLoader.vue.ts"></script>

<style lang="less" scoped>
.loader {
  width: 300px;
}

.st0{fill:#66f;}
.st1{fill:#243e6a;}

</style>
