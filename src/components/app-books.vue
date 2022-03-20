<template>
    <div class="app-books">
        <h3
            v-show="BOOKS.items.length"
            class="app-books__total-items"
        >Found {{ BOOKS.totalItems }} results</h3>
        <div class="app-books__items">
            <app-book-card
                v-for="book in BOOKS.items"
                :key="book.etag"
                :book_data="book.volumeInfo"
                @logOwnBook="logOwnBook(book.volumeInfo)"
            ></app-book-card>
        </div>
        <button
            v-show="BOOKS.items.length && !BOOKS.showLoad && !BOOKS.msgStatus.isAllBooksMsg"
            class="app-books__btn-load"
            @click="getBooksByRequest"
        >Load more</button>
        <p
            class="app-books__msg"
            v-if="BOOKS.msgStatus.isAllBooksMsg"
        >Это все найденные книги по вашему запросу</p>
        <p
            class="app-books__msg"
            v-else-if="BOOKS.msgStatus.noFoundBooksMsg"
        >К сожалению, по вашему запросу не удалось ничего найти</p>
        <app-loading v-show="BOOKS.showLoad"></app-loading>
    </div>
</template>

<script>
import appBookCard from './app-book-card.vue'
import appLoading from './app-loading.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'app-books',
    components: {
    appBookCard,
    appLoading
},
    methods: {
        ...mapActions([
            'getBooksByRequest',
            'sendTheBookToState'
        ]),
        logOwnBook(book) {
            this.sendTheBookToState(book);
            this.$router.push('book'); 
        }
    },
    computed: {
        ...mapGetters([
            'BOOKS'
        ])
    },
    mounted() {

    }
}
</script>

<style lang="scss">
.app-books {
    padding: 30px;

    &__total-items {
        text-align: center;
        margin: 15px 0;
        font: 500 18px sans-serif;
    }

    &__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &__btn-load {
        padding: 5px 30px;
        margin: 40px auto;
        display: block;
        border-radius: 20px;
        font: 400 22px sans-serif;
        background: rgb(163, 79, 30);
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.1);
        }
    }

    &__msg {
        text-align: center;
        font: 400 21px/21px sans-serif;
    }
}
</style>