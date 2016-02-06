import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Actions from '../actions/actions.jsx';

var {Card} = mui;

export default class DialogWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      dialog: ""
    }
  }

  onChange(event) {
    this.setState({
      dialog: event.target.value
    });
  }

  onKeyUp(event) {
    if(event.keyCode === 13 && trim(event.target.value) != ''){
      event.preventDefault();

      Actions.addDialog(this.state.dialog);

      this.setState({
        dialog: ""
      });
    }
  }

  render(){
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea
          value={this.state.dialog}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            borderColor: '#D0D0D0',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px'
          }} />
      </Card>
    );
  }
}