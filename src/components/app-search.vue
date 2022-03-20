<template>
    <div class="app-search">
        <h1 class="app-search__title">Search for Books</h1>
        <app-search-form></app-search-form>
    </div>
</template>

<script>

import appSearchForm from "./app-search-form.vue"

export default {
    name: 'app-search',
    components: {
        appSearchForm
    }

}
</script>

<style lang="scss">
</style>