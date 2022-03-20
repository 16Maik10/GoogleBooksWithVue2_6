<template>
    <div>
        <form 
        action="#" 
        class="app-search-form"
        @submit.prevent="searchBooks"
        >
            <div class="app-search-form__query">
                <input 
                type="text" 
                class="app-search-form__text" 
                v-model="reqParams.textOfQuery"
                required
                />
                <button type="submit" class="app-search-form__btn-submit">
                </button>
            </div>
            <div class="app-search-form__filters">
                <label for="category" class="app-search-form__label">Categories</label>
                <select 
                name="category" 
                id="category" 
                class="app-search-form__select"
                v-model="reqParams.category"
                >
                    <!-- Это для избежания проблемы на телефонах, когда нет возможности выбирать
                    первый вариант в списке select -->
                    <option disabled>all</option>
                    <option value="all">all</option>
                    <option value="art">art</option>
                    <option value="biography">biography</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
                <label for="sort" class="app-search-form__label">Sorting by</label>
                <select 
                name="sort" 
                id="sort" 
                class="app-search-form__select"
                v-model="reqParams.sortType"
                >
                    <option disabled>relevance</option>
                    <option value="relevance">relevance</option>
                    <option value="newest">newest</option>
                </select>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex"

export default {
    name: 'app-search-form',
    data(){
        return {
            reqParams: {
                textOfQuery: '',
                category: 'all',
                sortType: 'relevance',
                startIndex: 0,
                maxResults: 30
                }
            }
    },
    computed: {
    },
    methods: {
        ...mapActions([
            'getBooksByRequest'
        ]),
        ...mapMutations([
            'setReqParams',
            'clearBooksInState'
        ]),
       searchBooks(){
            this.clearBooksInState();
            this.setReqParams(this.reqParams);
            this.getBooksByRequest();
        } 
    }
}
</script>

<style lang="scss">
.app-search-form {
    max-width: 1140px;
    margin: 0 auto;
    color: #000;

    &__query {
        display: flex;
        justify-content: center;
    }

    &__text {
        display: block;
        width: 50%;
        padding: 5px 10px;
        border: 1px solid #000;
        border-right: 0;
        font: 400 20px / 20px sans-serif;

        &:focus-visible {
            outline: none;
        }
    }

    &__btn-submit {
        width: 30px;
        border: 1px solid #000;
        border-left: 0;
        padding: 2px;
        background: url(../assets/images/search.svg) no-repeat center/75%, #fff;
    }

    &__filters {
        text-align: center;
        margin-top: 30px;
    }

    &__label {
        font: 400 20px/20px sans-serif;
        margin-right: 10px;
    }

    &__select {
        width: 20%;
        height: 30px;
        font: 400 20px / 20px sans-serif;
        color: rgba(0, 0, 0, 0.7);
        margin-right: 15px;
    }
}
</style>