import React from 'react';
import Hero from './Hero.jsx';
import {AppBar, Card, List} from 'material-ui';
import DialogWriter from './DialogWriter.jsx';
import Relay from 'react-relay';
import {debounce} from 'lodash';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Avengers extends React.Component {
    constructor(props) {
        super(props);
        this.setVariables = debounce(this.props.relay.setVariables, 300);
    }

    search = (e) => {
        this.setVariables({query: e.target.value});
    };

    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    render() {
        console.log(this.props);
        var dialogs = this.props.dialogStore.dialogConnection.edges.map((edge, i) => {
            return (
                <Hero key={i} dialog={edge.node}/>
            );
        });

        return (
            <div>
                <AppBar
                    style={{backgroundColor: '#009688'}}
                    title="Avengers Jabber"/>

                <textarea
                    placeholder="Search dialogs here..."
                    onChange={this.search}
                    style={{
                        width: '25%',
                        borderColor: '#D0D0D0',
                        resize: 'none',
                        borderRadius: 3,
                        minHeight: 10,
                        color: '#555',
                        fontSize: 14,
                        outline: 'auto 0px'
                    }}/>

                <Card style={{
                    flexGrow: 1
                }}>
                    <List>
                        {dialogs}
                    </List>
                </Card>
                <DialogWriter store={this.props.dialogStore}/>
            </div>
        );
    }
}

Avengers.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Relay.createContainer(Avengers, {
    initialVariables: {
        query: ''
    },
    fragments: {
        dialogStore: () => Relay.QL`
      fragment on Store {
        id,
        dialogConnection(first: 100, query: $query) {
          edges {
            node {
              ${Hero.getFragment('dialog')}
            }
          }
        }
      }
    `
    }
});
