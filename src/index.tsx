import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app/App";
import {store} from './state/store'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
serviceWorker.unregister()
