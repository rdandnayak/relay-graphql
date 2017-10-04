import { post } from 'jquery';
import ServerAction from './actions/ServerActions';

let API = {
  fetchLinks() {
    post('/graphql', {
      query: `{
        links {
          _id
          title
          url
        }
      }`
    }).done(resp => {
      console.log('1. In API');
      ServerAction.receiveLinks(resp.data.links);
    });
  }
};

export default API;
