import React from 'react';
import mui from 'material-ui';
import trim from 'trim';
import Relay from 'react-relay';
import SendDialogMutation from '../mutations/SendDialogMutation';
var {Card} = mui;

export default class lineWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      line: ""
    }
  }

  onChange(event) {
    this.setState({
      line: event.target.value
    });
  }

  onKeyUp(event) {
    if (event.keyCode === 13 && trim(event.target.value) != '') {
      event.preventDefault();
      let vals = event.target.value.split(',');
      Relay.Store.commitUpdate(new SendDialogMutation({
        hero: trim(vals[0]),
        line: trim(vals[1]),
        store: this.props.store
      }));

      this.setState({
        line: ""
      });
    }
  }

  render() {
    return (
      <Card style={{
        maxWidth: 1200,
        margin: '30px auto',
        padding: 30
      }}>
        <textarea
          value={this.state.line}
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
          }}/>
      </Card>
    );
  }
}