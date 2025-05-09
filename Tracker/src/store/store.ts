import { configureStore, Store } from "@reduxjs/toolkit";
import tableReducer from './features/tableSlice.ts'


 export const store : Store = configureStore({
    reducer: {table: tableReducer},
});

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;