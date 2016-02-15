import Relay from 'react-relay';

export default class SendDialogMutation extends Relay.Mutation {
  getMutation(){
    return Relay.QL `
      mutation { sendDialog }
    `;
  }

  getVariables(){
    return {
      hero: this.props.hero,
      line: this.props.line
    }
  }

  getFatQuery() {
    return Relay.QL`
      fragment on SendDialogPayload {
        dialogEdge,
        store { dialogConnection }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'store',
      parentID: this.props.store.id,
      connectionName: 'dialogConnection',
      edgeName: 'dialogEdge',
      rangeBehaviors: {
        '': 'prepend'
      }
    }]
  }

  getOptimisticResponse() {
    return {
      dialogEdge: {
        node: {
          hero: this.props.hero,
          line: this.props.line
        }
      }
    }
  }
}