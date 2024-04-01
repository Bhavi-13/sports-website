// SliderCard.tsx
import React from 'react';

interface SliderCardProps {
  title: string;
  imageUrl: string;
  timing?: string; // Make timing optional
  address?: string;
  buttonText: string
}

const SliderCard: React.FC<SliderCardProps> = ({ title, imageUrl, timing, address, buttonText }) => {
  return (
    <>
   
    <div className="mt-10 dark:text-white shadow-lg">
     
      <div className='rounded-b-3xl dark:bg-gray-700'>
        <img
          className="flex items-center m-auto border-b-2 border-dashed border-gray-400 "
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className='rounded-t-3xl dark:bg-gray-700 mt-0'>
      <h2 className="text-sm mb-2 pt-3 font-semibold">{title}</h2>

        {timing && <p className="text-xs mb-2 text-neutral-600 font-medium dark:text-neutral-300">{timing}</p>}
        {address && <p className="text-xs mb-4 text-neutral-500 dark:text-neutral-400">{address}</p>}
        <button type='button' className='bg-black text-xs mb-3 p-2 text-white'>{buttonText} </button>
      </div>

    </div>
    </>
  );
};

export default SliderCard;



