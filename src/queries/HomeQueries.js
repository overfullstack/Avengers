import Relay from 'react-relay';

export default {
  dialogStore: (Component) => Relay.QL`
      query MainQuery {
        store {
          ${Component.getFragment('dialogStore')}
        }
      }
    `
};