import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './client/Root';
import { Provider } from 'mobx-react'; // Mobx에서 사용하는 Provider
import OnOffStore from './stores/OnOff';

const onoff = new OnOffStore();

ReactDOM.render(
    <Provider 
        onoff={onoff}
    >
        <Root />
    </Provider>
    , 
document.getElementById('root'));

serviceWorker.register();
