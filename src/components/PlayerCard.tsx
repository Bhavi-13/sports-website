import React from 'react';

interface Player {
  id: number;
  name: string;
  imageUrl?: string; // Make imageUrl optional
  width?: number; // Make width optional
  height?: number; // Make height optional
  text?: string; // Add a text property
  events?: string; // Add events property
  sportName?: string; // Add sportName property
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="m-5 mt-10 object-cover border-8 border-white dark:border-8 dark:border-gray-700 dark:bg-gray-700 dark:text-white shadow-lg">
      {player.imageUrl && (
        <img
          className="w-full object-cover object-center"
          src={`/images/${player.imageUrl}`}
          alt={player.name}
          width={player.width || 20}
          height={player.height || 40}
        />
      )}
      <div>
        <h2 className="lg:text-sm md:text-xs sm:text-xs font-semibold my-2">{player.name}</h2>
       <div className="flex flex-row lg:gap-7 md:gap-5 sm:gap-5 px-2 dark:bg-gray-800 items-center">
        {player.events && (
            <div className="flex flex-col">
              <p className='text-neutral-400 lg:text-xs md:text-[8px] sm:text-[8px]'>Total Events</p>
              <p className="lg:text-sm md:text-[9px] sm:text-[9px] mb-2">{player.events} Events</p>
            </div>
          )}
          {player.sportName && (
            <div className="flex flex-col">
              <p className='text-neutral-400 lg:text-xs md:text-[8px] sm:text-[8px]'>Sport</p>
              <p className="lg:text-sm md:text-[9px] sm:text-[9px] mb-2">{player.sportName}</p>
            </div>
          )}
       </div>
       
        {player.text && ( 
          <p className='text-xs p-3'>{player.text}</p>
        )}
      </div>
     
    </div>
    
  );
};

export default PlayerCard;
