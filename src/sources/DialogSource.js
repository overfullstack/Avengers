import Actions from '../actions/actions.jsx';
import {post} from 'jquery';

let dialogs = [];

let DialogSource = {
  getDialogs: {
    remote(state){
      return new Promise((resolve) => {
        post('http://localhost:3000/graphql', {
          query: `{
            dialogs {
                _id,
                hero,
                line
            }
          }`
        }).done(resp => {
          dialogs = resp.data.dialogs;
          resolve(dialogs)
        });
      });
    },
    success: Actions.dialogReceived,
    error: Actions.dialogFailed
  },

  addLine: {
    remote(state, line) {
      return new Promise((resolve) => {
        let dialog = {};
        dialog.hero = "UnSung";
        dialog.line = line;
        dialogs.push(dialog);
        resolve(dialogs);
      });
    },
    success: Actions.dialogReceived
  }
};

export default DialogSource;