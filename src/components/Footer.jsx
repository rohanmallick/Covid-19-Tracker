import React from 'react';
import '../css/Footer.css';
let curYear = new Date();
curYear = curYear.getFullYear();


export const Footer = () => {
    return (
        <>
        <div className='box-f mt-5  bk pt-1'>
            {/* <h1 className='display-6'>Let's work together...</h1> */}
            <h6>

            @ Copyright {curYear} by <span className='text-danger'> ROHAN MALLICK</span>
            </h6>
          
            <div className="d-flex  mt-1">
        <a href="https://www.linkedin.com/in/rohan-mallick-515317210/" className="text-dark"><i className="fab fa-linkedin "
                style={{fontSize: '20px'}}></i></a>&nbsp;&nbsp;
        <a href="https://github.com/rohanmallick" className="text-dark"><i className="fab fa-github "
                style={{fontSize: '20px'}}></i></a>

    </div>
            </div>
        </>
    )
}


export default Footer;
