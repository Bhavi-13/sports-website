"use client"
import React, {useState} from 'react';
import PlayerCard from '../components/PlayerCard';
import SliderCard from './SliderCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const players = [
  {
    id: 1,
    name: 'Sacramento River Cats',
    sportName: 'Baseball',
    events: '48',
    imageUrl: 'player1.png', 
  },
  {
    id: 2,
    name: 'Las Vegas Aviators',
    sportName: 'Baseball',
    events: '28',
    imageUrl: 'player2.png', 
  },
  {
    id: 3,
    name: 'New Jersey Devils',
    sportName: 'Ice Hockey',
    events: '15',
    imageUrl: 'player3.png', 
  },
  {
    id: 4,
    name: 'Las Vegas Aviators',
    sportName: 'Baseball',
    events: '28',
    imageUrl: 'player2.png', 
  },
  {
    id: 5,
    name: "Advertisement title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: 'advertisement.png', 
    width: 100, // Add width for the fifth player
    height: 170, // Add height for the fifth player
  },
 
];

const PlayersPage: React.FC = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="container mx-auto lg:px-20 md:px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
       
      </div>
      <button className='flex items-center justify-center m-auto bg-sky-500 p-2 px-4 text-xs text-white'>See more</button>
     
      <div className='lg:m-28 mt-8 text-center p-12 dark:bg-gray-800'>
        <h1 className='mt-5 text-3xl font-bold text-center dark:text-white'>Collection Spotlight</h1>
        <p className='mt-5 text-sm dark:text-white'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

        <div className="container lg:px-20 md:px-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-5 relative lg:grid-cols-3 gap-4">
        <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2">
        <ChevronLeftIcon className="text-blue-500 border-2 border-blue-500 h-8 w-8 cursor-pointer"  onClick={handlePrevClick}/>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 ">
          <ChevronRightIcon className="text-blue-500 border-2 border-blue-500 h-8 w-8 cursor-pointer"  onClick={handleNextClick}/>
        </div>
       <div style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
       <SliderCard title="Las Vegas Aviators" imageUrl="/images/player4.png" timing="OCT 15 | SUN | 4.30 PM " 
        buttonText="Take Flight Collection" address="Las Vegas Ballpark, Las Vegas, Nevada"
        />
       </div>
        <div style={{ display: currentIndex === 1 ? 'block' : 'block' }}>
        <SliderCard title="Sacramento River Cats" imageUrl="/images/player5.png" timing="OCT 15 | SUN | 4.30 PM " buttonText="Orange Collection"
          address="Sutter health park, Sacramento, California"/>
        </div>
        <div style={{ display: currentIndex === 2 ? 'block' : 'block' }}>
        <SliderCard title="Las Vegas Aviators" imageUrl="/images/player4.png" timing="OCT 15 | SUN | 4.30 PM " buttonText="Take Flight Collection"
        address="Las Vegas Ballpark, Las Vegas, Nevada"/>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default PlayersPage;
