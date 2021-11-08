import { createStore } from "vuex";
export default createStore({
    state: {
        currentMenu:null,
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
            }
        ],
    },
    mutations: {
        selectMenu(state,val){
            val.name=='home'?(state.currentMenu=null): state.currentMenu=val
        },
    },
    actions: {},
    modules: {},
});