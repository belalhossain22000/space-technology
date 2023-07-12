import React from 'react';
import Image from 'next/image'

const planetData = [
    {
        id: 1,
        image: "/moon.png",
        name: "moon",
        title: "Dune Buggy Tours"
    },
    {
        id: 2,
        image: "/saturn.png",
        name: "Saturn",
        title: "Canyon Adventures"
    },
    {
        id: 3,
        image: "/jupitar.png",
        name: "Jupiter",
        title: "Ocean Aerial Tours"
    },
]

const EnjoySpace = () => {
    return (
        <section className='mt-[100px] text-white'>
            <div>
                <h2 className='text-[55px] text-center font-normal leading-[60px] tracking-[0.55px]'>Enjoying Space Like Never Before</h2>
            </div>
            <div className='text-center grid grid-cols-3'>
                {
                    planetData.map(({ title, name, image, id }) => <div key={id} className=' w-[352px] h-[287px] relative' style={{ backgroundColor: "linear-gradient(180deg, rgba(38, 1, 83, 0.00) 14.62%, #250153 100%)" }} >

                        <img className=' rounded-full' height={250} width={250} src={image} alt="" />

                        <div>
                            <p className='text-[#FFF]'>{name}</p>
                            <h4>{title}</h4>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default EnjoySpace;