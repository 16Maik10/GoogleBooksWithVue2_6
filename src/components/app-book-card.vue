<template>
    <div class="app-book-card" @click="$emit('logOwnBook')">
        <img
            class="app-book-card__img"
            v-if="book_data.imageLinks"
            :src="book_data.imageLinks.thumbnail"
            alt="photo of book"
            width="128"
            height="210"
        />
        <img
            class="app-book-card__img book-card__img_popup"
            v-else
            src="https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
            alt="default img of book"
            width="128"
            height="210"
        />
        <div class="app-book-card__desc">
            <p v-if="book_data.categories" class="app-book-card__category">{{ book_data.categories[0] }}</p>
            <p v-if="book_data.title" class="app-book-card__title">{{ book_data.title }}</p>
            <p v-if="book_data.authors" class="app-book-card__authors">{{ book_data.authors.join(', ') }}</p>
        </div>
    </div>
</template>

<script>
export default {

    name: 'app-book-card',
    props: {
        book_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }

}
</script>

<style lang="scss">
.app-book-card {
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 20px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    margin-bottom: 25px;
    color: #000;
    text-decoration: none;
    cursor: pointer;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 4px 15px 30px -13px;
    }

    &__img {
        box-shadow: 6px 8px 38px -5px;
        margin: 5px auto;

        &_popup {
            max-height: 26vh;
        }
    }

    &__desc {
        margin-top: 20px;
    }

    &__category,
    &__authors {
        font: 402 20px/20px sans-serif;
        color: rgba(0, 0, 0, 0.5);
    }
    &__title {
        font: 700 22px sans-serif;
        margin: 10px 0;
    }
}
</style>