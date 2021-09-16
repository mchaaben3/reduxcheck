import React from 'react'
import { Route,BrowserRouter } from 'react-router-dom'
import  App from './App'
export const RouteC = () => {
    return (
        <div>
        <BrowserRouter>
            <Route path='/' component={App}/>
        </BrowserRouter>
        </div>
    )
}
