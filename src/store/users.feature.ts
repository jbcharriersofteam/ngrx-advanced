import { createFeature, createSelector } from "@ngrx/store";
import { usersReducer } from './users.reducer';
import { User } from "./model";

export const usersFeature = createFeature({
  name: 'users',
  reducer: usersReducer,
})
