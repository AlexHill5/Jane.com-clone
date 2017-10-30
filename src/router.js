import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/Home/HomePage'



export default (
    <Switch>
        <Route component={HomePage} path='/' exact />

    </Switch>
)
