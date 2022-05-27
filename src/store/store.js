import { configureStore } from "@reduxjs/toolkit";

import { auth } from "./slices";

export default configureStore({
  reducer: {
    auth: auth.reducer,
  },
});
