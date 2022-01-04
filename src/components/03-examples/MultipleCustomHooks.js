import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);

     const { loading, data } = useFech( `https://www.breakingbadapi.com/api/quotes/${counter}`)
     
     const { author, quote } = !!data && data[0]
   
     
    
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading
                ? 
                    (
                        <div className='alert alert-info text-center'>
                            loading....
                        </div>
                    )
                :
                    (

                    <blockquote className="blockquote text-right">
                        <p className='mb-6'> {quote} </p>
                        <footer className='blockquote-footer'> {author} </footer>
                    </blockquote>
                    )
            }
            <button 
                className='btn btn-primary'
                onClick={ increment }
                >
                siguiente quote
            </button>


        </>
    )
}
