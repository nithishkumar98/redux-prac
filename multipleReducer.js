const redux = require('redux')


const createStore = redux.createStore


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
const initialState = {
    numOfCakes :10,
    numOfIcecream:20
}



//reducers
const reducer=(state=initialState,action) =>{
        switch(action.type){
            case BUY_CAKE: return{
                ...state,
                numOfCakes : state.numOfCakes -1
            }
        

            case BUY_ICECREAM: return{
                ...state,
                numOfIcecream : state.numOfIcecream -1
            }
            default: return state 
        }
  
    }


const store = createStore(reducer)
console.log('inital state', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyIcecream())
unsubscribe()



const redux = require('redux')


const createStore = redux.createStore


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
const initialState = {
    numOfCakes :10,
    numOfIcecream:20
}



//reducers
const reducer=(state=initialState,action) =>{
        switch(action.type){
            case BUY_CAKE: return{
                ...state,
                numOfCakes : state.numOfCakes -1
            }
        

            case BUY_ICECREAM: return{
                ...state,
                numOfIcecream : state.numOfIcecream -1
            }
            default: return state 
        }
  
    }


const store = createStore(reducer)
console.log('inital state', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()))
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyIcecream())
unsubscribe()


// nithishkumar@ilblr-lt0143:~/rredux-pra$ node try
// inital state { numOfCakes: 10, numOfIcecream: 20 }
// Updated state { numOfCakes: 9, numOfIcecream: 20 }
// Updated state { numOfCakes: 8, numOfIcecream: 20 }
// Updated state { numOfCakes: 8, numOfIcecream: 19 }
