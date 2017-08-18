//[] array because we need many cities in the view.

// DO NOT OR NEVER UPDATE STATE DIRECTLY LIKE EQUALS TO. use setState This holds true for Redux too

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
 //   console.log('Action received',action);  Middleware check Redux Promise

    switch(action.type) {
        case FETCH_WEATHER:
           /* return state.concat([ action.payload.data ]);  dont use state.push because that changes the state. Whereas concat will only mutate it slightly. BTW OLD SYNTAX */
            
            //return [ action.payload.data, ...state ]; // ES6 syntax for concat. This also makes the new city on top like first on the list
            
           // return state.splice(0,1,action.payload.data); use this somewhere else
            
            return [ action.payload.data ]; // replaces the previous city or overwrites
    }
    
    return state;
}