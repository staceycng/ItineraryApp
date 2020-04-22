import React from 'react';

function SplashDisplay(props){

    return(
        <div className='page-body splash-display'>
            <div className='page-body-left'>
                <div className='page-body-heading page-body-text'>night out.</div>
                <div className='page-body-caption page-body-text'>Seamless collaborative planning for your next night out.</div>
            </div>
            <div className='page-body-right'>
                <img className='page-body-image' src="https://mvp-assets.s3-us-west-1.amazonaws.com/PngItem_2262337.png"></img>
            </div>
        </div>
    )
}

export default SplashDisplay;