import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3 tc'>
                {`${name}, your current entries are...`}
            </div>
            <div className='white f1 tc'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;