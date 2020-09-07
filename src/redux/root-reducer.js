import { combineReducers } from "redux";

import PopularReducer from "./popular/popular.reducer";
import UpcomingReducer from "./upcoming/upcoming.reducer";
import TrendingReducer from "./trending/trending.reducer";
import SearchReducer from "./search/search.reducer";

const rootReducer = combineReducers({
  popularMovies: PopularReducer,
  upcomingMovies: UpcomingReducer,
  trendingMovies: TrendingReducer,
  searchMovies: SearchReducer,
});
export default rootReducer;
