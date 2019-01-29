import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

import App from './App'
import store from './store'
import { GlobalStyle } from './style.js'

render(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <GlobalStyle />
                <App />

                <Route exact path="/" component={Home} />
                <Route exact path="/detail/:id" component={Detail} />
            </Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
