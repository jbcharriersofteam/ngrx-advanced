import { createFeature } from "@ngrx/store";
import { usersReducer } from './users.reducer';

export const usersFeature = createFeature({
  name: 'myUsers',
  reducer: usersReducer,
})
