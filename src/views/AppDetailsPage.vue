<template>
    <div class="app-details-page">
        <router-link class="app-details-page__link" to="/">
Назад к поиску
        </router-link>
        <app-book-details :book_data="BOOKS.moreInfoOfBook"></app-book-details>
    </div>
</template>

<script>
    import appBookDetails from "@/components/app-book-details.vue";
    import { mapGetters } from "vuex";

export default {
    name: 'app-details',
    components: {
        appBookDetails
    },
    computed: {
        ...mapGetters([
            'BOOKS'
        ])
    }
}
</script>

<style lang="scss">
.app-details-page__link{
    display: block;
    margin: 20px 0;
    text-align: center;
    text-decoration: none;
    font: 700 25px sans-serif;
    color: #f44;
}
</style>