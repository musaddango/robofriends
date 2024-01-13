import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import './index.css';
import App from './containers/App.tsx';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { Root, createRoot } from "react-dom/client";
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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();