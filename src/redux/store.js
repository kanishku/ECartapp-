import { configureStore } from "@reduxjs/toolkit";
import Whishlistslice from "./Whishlistslice";
import cartslice from "./cartslice";

const store =configureStore({
   reducer:{
      wishlistReducer:Whishlistslice,
      cartReducer:cartslice
   }
})

export default store