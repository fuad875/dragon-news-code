import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (

        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            {/* <Marquee className='flex gap-1' pauseOnHover={true}>  */}
                   <p className='font-bold'>kdkdkkasfjadwfafpwaef</p>
                   <p className='font-bold'>kdkdkkasfjadwfafpwaef</p>
                   <p className='font-bold'>kdkdkkasfjadwfafpwaef</p>
             {/* </Marquee>  */}
           
        </div>
    );
};

export default LatestNews;