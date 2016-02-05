import alt from '../alt/alt'

class powerActions {
  constructor(){
    this.generateActions(
      'yellMyPower',
      'dialogReceived',
      'dialogFailed'
    );
  }
}

export default alt.createActions(powerActions);