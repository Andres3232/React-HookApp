import React, { useLayoutEffect, useRef, useState } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';
import './layout.css';

export const Layout = () => {

    const {counter,increment} = useCounter(1);

     const { data } = useFech( `https://www.breakingbadapi.com/api/quotes/${counter}`)
     
     const {  quote } = !!data && data[0]

     const pTag = useRef()
     
     const [boxSize, setBoxSize] = useState({})

     useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());
         
     }, [quote])
   
     
    
    
    return (
        <>
            <h1>LayaoutEffect</h1>
            <hr/>

                <blockquote className="blockquote text-right">
                    <p 
                       className='mb-6'
                       ref={ pTag }
                    > 
                        {quote} 
                    </p>
                </blockquote>
        
            <pre>
                {JSON.stringify(boxSize,null,3)}
            </pre>
            <button 
                className='btn btn-primary'
                onClick={ increment }
                >
                siguiente quote
            </button>


        </>
    )
}
