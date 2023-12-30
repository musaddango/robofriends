import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import './index.css';
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
                <StrictMode>
                    <App />
                </StrictMode>
            </Provider>
            )


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
