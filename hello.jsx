import { render } from '@testing-library/react';
import React from 'react';
const SLhello = ()=>{

    let x = '😊';
    let y = '😊';
    let z = '😎';
    
    if((x===y)&& (y===z)){
        return <div className='display-6 text-center'>
            <h1>{x}{y}{z}</h1>
            <h1>This is Machine.</h1>
            <hr />
        </div>

    }else{
        return <div className='display-6 text-center'>
            <h1>{x}{y}{z}</h1>
            <h1>This is not Machine.</h1>
            <hr />
        </div>
    }
    

};


const Part1 =(pro)=>{
   return(
       <div>        
       <h1 className='container text-center display-6 mt-5' > {pro.title}</h1></div>
   )
    

    
}
export const Hello = () => {
    return (
        <>
            <h1 className='container text-center display-6 mt-5' > 🎰Welcome to <span style={{fontWeight:'bold',}}> Slot machine game</span>🎰</h1>
            <SLhello/>
            <Part1 title='fuck you ' />
        </>
    )
}
export default Hello;
