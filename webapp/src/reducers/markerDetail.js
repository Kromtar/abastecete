import update from 'react-addons-update';

import { LOAD_MARKER_DETAIL } from '../actions/types';

var defaultValues = {
  markerDetail: {
    until: '00:00',
    queue_level: '0',
    products:['']
  },
  ready: false
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case LOAD_MARKER_DETAIL:
        //return state; 
        return update(state, {$set: action.payload});
    default:
        return state;
  }
}