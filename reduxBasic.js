const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
//actions
function buyCakes(){
    return{
        type: BUY_CAKE,
        info:'first redux action'
    }
}

//initalState

const initalState ={
    numOfCakes:10           
}
//reducer
const reducer = (state=initalState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state 
    }                                  
}

//store
const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCakes())
unsubscribe()
