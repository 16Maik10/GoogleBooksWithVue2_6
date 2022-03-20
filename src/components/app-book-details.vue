<template>
    <div class="app-book-details">
        <img
            class="app-book-details__img"
            v-if="book_data.imageLinks"
            :src="book_data.imageLinks.thumbnail"
            alt="photo of book"
        />
        <img
            class="app-book-details__img"
            v-else
            src="https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
            alt="default img of book"
        />
        <div class="app-book-details__desc">
            <p
                v-if="book_data.categories"
                class="app-book-details__category"
            >{{ book_data.categories.join(', ') }}</p>
            <p v-if="book_data.title" class="app-book-details__title">{{ book_data.title }}</p>
            <p
                v-if="book_data.authors"
                class="app-book-details__authors"
            >{{ book_data.authors.join(', ') }}</p>
            <p class="app-book-details__desc-text">{{ book_data.description }}</p>
            <a
                :href="book_data.infoLink"
                target="_blank"
                class="app-book-details__link"
            >На страницу книги</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-book-details',
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
.app-book-details {
    display: flex;
    justify-content: space-between;
    padding: 45px;

    &__img {
        width: 300px;
        height: 492px;
        margin-right: 20px;
    }
    &__category,
    &__authors {
        font: 400 25px sans-serif;
        color: rgba(0, 0, 0, 0.5);
    }
    &__title {
        font: 700 30px sans-serif;
        margin: 10px 0;
    }
    &__desc-text {
        font: 400 25px sans-serif;
        margin: 20px 0;
        text-align: justify;
    }

    &__link {
        font: 400 25px sans-serif;
        text-decoration: none;
        color: firebrick;
        transition: color 0.2s;

        &:hover{
        color: #24b222;
    }
    }
}
</style>