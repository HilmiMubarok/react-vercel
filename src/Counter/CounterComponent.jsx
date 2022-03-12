import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementWithCheck, increment } from '../app/features/Counter/actions'

function CounterComponent() {
    let { count } = useSelector(state => state.counter)
    let dispatch = useDispatch()
    return (
        <>
            <div className='flex justify-center mt-5 items-center'>
                <button className='bg-bg-light text-font-light dark:bg-bg-dark dark:text-font-dark border-2 border-bg-dark dark:border-bg-light dark:font-bold rounded-lg shadow-lg p-4 text-6xl' onClick={() => {
                    dispatch(increment(1))
                }}>
                    +
                </button>
                <h1 className='text-6xl mx-5'>{count}</h1>
                <button className='bg-bg-light text-font-light dark:bg-bg-dark dark:text-font-dark border-2 border-bg-dark dark:border-bg-light dark:font-bold rounded-lg shadow-lg p-4 text-6xl' onClick={() => {
                    dispatch(decrementWithCheck(1))
                }}>
                    -
                </button>
            </div>
        </>
    )
}

export default CounterComponent