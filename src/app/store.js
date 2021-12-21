import { configureStore } from '@reduxjs/toolkit'
import IssReducer from "../Reducer/dataISS.reducer"

export default configureStore({
  reducer: {
      iss: IssReducer,
  },
})