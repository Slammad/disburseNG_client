import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        title:"My Componen titile",
        links:[
            'http://www.youtube.com',
            'http://www.google.com'
           ]
    },
    getters:{
        countlinks:state=>{
            return state.links.length
        }
    },
    mutations:{
        ADD_LINK:(state,link)=>{
            state.links.push(link)
        },
        REMOVE_LINK:(state,link)=>{
            state.links.splice(link,1)
        }
        
    },
    actions:{
        removeLink:(context,link)=>{
            context.commit('REMOVE_LINK',link)
        }
    }
})