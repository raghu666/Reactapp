import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    
    form: formReducer,
    weather: WeatherReducer
});

export default rootReducer;
