import {createSlice} from '@reduxjs/toolkit'
const user = {
  name : "abdessamd",
  age : 21 ,
  country : "ma"
}
const userSlice = createSlice({
  name :'user',
  initialState : user,
  reducers : {
    resetUser : (state) => {
      //
    },
    updateUser : (state) => {
      //
    }
  }
}
)
export {userSlice}