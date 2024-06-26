import React, { useReducer } from 'react'

let intialVal ={n:12};

function UseReducerHookEx() {

    const reducerFun = (state,action)=>{
        console.log(state);//{n:12}
        console.log(action.type);//action = {"type":"decrement"}

        switch(action.type)//decrement/increment
        {
            case 'increment': return {n:state.n+1}         

            case 'decrement': return {n:state.n-1}          

            default: return state;
            
        }

    }

    const [state,dispatch] = useReducer(reducerFun,intialVal);
  return (
    <div>
        <button onClick={()=>{dispatch({"type":"decrement"})}}>-</button>
      <h2>{state.n}</h2>
      <button onClick={()=>{dispatch({"type":"increment"})}}>+</button>
    </div>
  )
}

export default UseReducerHookEx
