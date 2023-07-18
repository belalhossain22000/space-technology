import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-[1170px] max-w-full mx-auto'>
            {children}
        </div>
    );
};

export default Container;