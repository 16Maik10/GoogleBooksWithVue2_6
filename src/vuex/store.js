import Vue from "vue";
import Vuex from "vuex"
import axios  from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        reqParams: {
            textOfQuery: '',
            category: 'all',
            sortType: 'relevance',
            startIndex: 0,
            maxResults: 30
        },
        userRequest: '',
        books: {
            showLoad: false,
            totalItems: 0,
            items: [],
            moreInfoOfBook: {},
            msgStatus: {
                noFoundBooksMsg: false,
                isAllBooksMsg: false
            }
        }
    },
    mutations: {
        setBooksToState(state, books){
            if(books.totalItems === 0){
                state.books.msgStatus.noFoundBooksMsg = true;
                console.log('По вашему запросу ничего не найдено')
            } else{
                if(state.books.totalItems === 0){
                   state.books.totalItems = books.totalItems;
                } 
                if(!books.items){
                    state.books.totalItems = state.books.items.length;
                    state.books.msgStatus.isAllBooksMsg = true;
                    console.log('Выведены все найденные книги по данному запросу')
                } else {
                    books.items.forEach(el => {
                    state.books.items.push(el)});
                }
            }
        },
        setReqParams(state, reqParams){
            state.reqParams = reqParams;
        },
        setUserRequest(state){
            state.userRequest ='https://www.googleapis.com/books/v1/volumes?q=' + 
            state.reqParams.textOfQuery +
            (state.reqParams.category !== 'all' ? `+subject:${state.reqParams.category}` : '') +
            (state.reqParams.sortType !== 'relevance' ? `+&orderBy=${state.reqParams.sortType}` : '') +
            "&startIndex=" +
            state.reqParams.startIndex +
            "&maxResults=" + 
            state.reqParams.maxResults;
        },
        pagination(state){
            state.reqParams.startIndex+=state.reqParams.maxResults
        },
        clearBooksInState(state){
            state.books.msgStatus.isAllBooksMsg = false;
            state.books.msgStatus.noFoundBooksMsg = false;
            state.books.totalItems = 0;
            state.books.items = [];
            state.reqParams.startIndex = 0;
        },
        toggleShow(state){
            state.books.showLoad = !state.books.showLoad;
        },
        setDetailsForBook(state,book){
            state.books.moreInfoOfBook = book;
        }
    },
    actions: {
        getBooksByRequest(context){
            context.commit('toggleShow')
            context.commit('setUserRequest');
            axios.get(context.state.userRequest)
                .then(response => {
                    console.log(response.data);
                    context.commit('setBooksToState', response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
                .finally(() => context.commit('toggleShow') )
            context.commit('pagination')
        },
        setRequestToState(context, reqParams){
            context.commit('setUserRequest', reqParams);
            context.commit('pagination');
        },
        sendTheBookToState({commit}, book){
            commit('setDetailsForBook', book);
        }

    },
    getters: {
        BOOKS(state){
            return state.books
        }
    }
})

export default store