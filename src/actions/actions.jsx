import alt from '../alt/alt'

class powerActions {
  constructor(){
    this.generateActions(
      'yellMyPower',
      'dialogReceived',
      'dialogFailed',
      'addDialog'
    );
  }
}

export default alt.createActions(powerActions);