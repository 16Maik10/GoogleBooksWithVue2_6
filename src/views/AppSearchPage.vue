<template>
    <div>
        <app-search></app-search>
        <app-books></app-books>
    </div>
</template>

<script>
import appSearch from "@/components/app-search.vue";
import appBooks from "@/components/app-books.vue";

export default {
    components: {
        appSearch,
        appBooks
    }
}
</script>

<style lang="scss">
</style>