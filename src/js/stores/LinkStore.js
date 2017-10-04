import AppDispatcher from '../actions/AppDispatcher';
import { ActionTypes } from '../actions/Constants';
import { EventEmitter } from 'events';

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log('3. In Store');
          _links = action.links;
          this.emit('change');
          break;
        default:
      }
    });
  }

  getAll() {
    return _links;
  }
}

export default new LinkStore();
