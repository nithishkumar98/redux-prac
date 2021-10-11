const redux = require('redux')
const createStore = redux.createStore
const combineReducers= redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

//actions
function buyCakes(){
    return{
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM,
        info: 'second erdux action'
    }
}



//initial State
const initialCakeState = {
    numOfCakes :10,
}

const initalIcecreamState = {
    numOfIcecream:20,
}



//reducers
const cakeReducer=(state=initialCakeState,action) =>{
        switch(action.type){
            case BUY_CAKE: return{
                ...state,
                numOfCakes : state.numOfCakes -1
            }
    
            default: return state 
        }
  
    }


const iceCreamReducer=(state=initalIcecreamState,action) =>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream:state.numOfIcecream-1
        }

        default: return state 
    }
}


//combining the reducers

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer,applyMiddleware(logger))
console.log('inital state', store.getState())
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyIcecream())
unsubscribe()
