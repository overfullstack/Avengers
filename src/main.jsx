require('./routes/router.jsx');

import Relay from 'react-relay';
console.log(
  Relay.QL `
    query Test {
      dialogs{
        hero
      }
    }
  `
);
