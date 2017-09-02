import React from 'react';
import { render } from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import './index.scss';
import Root from './routes/Root';

OfflinePluginRuntime.install()

render(<Root />, document.getElementById('app'));
