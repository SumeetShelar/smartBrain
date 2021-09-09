import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 tc'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input className='f4 pa2 w-70' type="text" />
                    <button style={{border: 0}} className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;