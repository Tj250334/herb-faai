import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

// Add Api
// import { pubmedApi } from "../features/pubmed/pubmed-api-slice";
// import { scopusApi } from "../features/scopus/scopus-api-slice";
// import { pubchemApi } from "../features/pubchem/pubchem-api-slice";
// import { postApi } from "../features/thaiherb/test";
import { herbApi } from "./features/thaiherb/thaiherb-api-slice";


// Query
import termReducer from "./features/term/term-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    // Query
    termStored: termReducer,

    // API
    // [pubmedApi.reducerPath]: pubmedApi.reducer,
    // [scopusApi.reducerPath]: scopusApi.reducer,
    // [pubchemApi.reducerPath]: pubchemApi.reducer,
    [herbApi.reducerPath]: herbApi.reducer,
    // [postApi.reducerPath]: postApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // pubmedApi.middleware,
      // scopusApi.middleware,
      // pubchemApi.middleware,
      herbApi.middleware,
      // postApi.middleware,
    ),
});

setupListeners(store.dispatch);

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
