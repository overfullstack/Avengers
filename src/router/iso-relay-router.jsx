import IsomorphicRouter from 'isomorphic-relay-router';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes/routes';
import { browserHistory } from 'react-router';

render(<IsomorphicRouter.Router routes={routes} history={browserHistory} />, avenger);