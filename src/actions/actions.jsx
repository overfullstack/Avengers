import alt from '../alt/alt'

class powerActions {
  constructor(){
    this.generateActions(
      'yellMyPower',
      'dialogReceived',
      'dialogFailed',
      'addLine'
    );
  }
}

export default alt.createActions(powerActions);