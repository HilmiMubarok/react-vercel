import React from 'react'
import { Provider } from 'react-redux'
import CounterComponent from './CounterComponent'
import store from '../app/store'

function Counter() {
    return (
        <>
            <div className='mt-5'>
                <h1 className='text-4xl font-bold'>Simple Counter Using Redux</h1>
                <Provider store={store}>
                    <CounterComponent />
                </Provider>
            </div>
        </>
    )
}

export default Counter