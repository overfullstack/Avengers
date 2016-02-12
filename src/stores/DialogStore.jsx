import alt from '../alt/alt';
import {decorate, bind, datasource} from 'alt-utils/lib/decorators';
import Actions from '../actions/actions.jsx';
import DialogSource from '../sources/DialogSource'

@datasource(DialogSource)
@decorate(alt)
class DialogStore {
  @bind(Actions.yellMyPower)
  yellMyPower(){
    this.setState({
      powers : "I have the power"
    })
  }

  @bind(Actions.dialogReceived)
  dialogs(dialogs){
    this.setState({
      dialogs : dialogs
    });
  }

  @bind(Actions.addLine)
  addLine(line){
    this.getInstance().addLine(line);
  }
}

export default alt.createStore(DialogStore);