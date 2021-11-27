
import {combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartReducer';


const persistConfig={
   key:'root',
   storage,
   whitelist:[]
//   whitelist:['cart']
}

// if new reducer created add it here  . it worked as barrel 
const rootReducer= combineReducers({
   
   cart:cartReducer,
  

})


const allReducers =persistReducer(persistConfig,rootReducer)

export default allReducers;