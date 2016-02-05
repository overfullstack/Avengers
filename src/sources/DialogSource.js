import Actions from '../actions/actions.jsx';

let DialogSource = {
  getDialogs: {
    remote(state){
      return new Promise((resolve) => {
        var dialogs = [
          "I'm Just Honest and Handsome",
          "I'm the GOD",
          "I'm Sexy",
          "Am I really an Avenger?"
        ];
        resolve(dialogs);
      });
    },
    success: Actions.dialogReceived,
    error: Actions.dialogFailed
  }
};

export default DialogSource;