import { configureStore } from "@reduxjs/toolkit";
import entitySlice from "../components/Entity/entitySlice";
import selectorSlice from "../components/Selector/selectorSlice";
// export default store;
const store = configureStore({
  reducer: {
    entities: entitySlice.reducer,
    idEntity: selectorSlice.reducer,
  },
});
export default store;
