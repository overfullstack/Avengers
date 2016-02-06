import Actions from '../actions/actions.jsx';

let dialogs = [
  "I'm Just Honest and Handsome",
  "I'm the GOD",
  "I'm Sexy",
  "Am I really an Avenger?"
];

let DialogSource = {
  getDialogs: {
    remote(state){
      return new Promise((resolve) => {
        resolve(dialogs);
      });
    },
    success: Actions.dialogReceived,
    error: Actions.dialogFailed
  },

  addDialog: {
    remote(state, dialog) {
      return new Promise((resolve) => {
        dialogs.push(dialog);
        resolve(dialogs);
      });
    },
    success: Actions.dialogReceived
  }
};

export default DialogSource;