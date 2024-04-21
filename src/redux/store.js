import { configureStore } from "@reduxjs/toolkit";  //import necessario per gli stores
import { projectsReducer } from "./slices/projectsSlice"

export default configureStore({
    reducer: {
        projects: projectsReducer,
    },
})