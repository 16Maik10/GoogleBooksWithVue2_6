<template>
    <div class="app-main-wrapper">
        <transition>
            <router-view></router-view>
            </transition>
        
    </div>
</template>

<script>


    export default {
        name: 'app-main-wrapper'       
    }
</script>

<style lang="scss">
.app-search{
     background: url(../assets/images/books1.jpg) no-repeat center/cover;
  padding: 50px;

  &__title {
    text-align: center;
    font: 900 60px / 50px sans-serif;
    margin-bottom: 35px;
  }
}
</style>