const INITIAL_TOGGLE_STATE = false
const toggleReducer = (state)=>{
  switch(state){
    case true :
      return false
    case false :
      return true
    default :
    return state
  }
}
export { INITIAL_TOGGLE_STATE, toggleReducer }