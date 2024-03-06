'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


const DiceRoller: React.FC = () => {
  const [dice1, setDice1] = useState<number>(1);
  const [dice2, setDice2] = useState<number>(1);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-10">What's fate got to say about it?</h1>
      <div className="flex mb-4">
        <div className='flex flex-col'>
        <div className='text-xl text-center'>AI's Roll</div>
        <div className="w-56 h-56 bg-gray-200 mr-4 flex items-center justify-center">
          <img src={`/dice/Dice${dice1}.png`} alt={`Dice 1: ${dice1}`} />
        </div>
        </div>
        <div className='flex flex-col'>
        <div className='text-xl text-center'>Your Roll</div>
        <div className="w-56 h-56 bg-gray-200 flex items-center justify-center">
          <img src={`/dice/Dice${dice2}.png`} alt={`Dice 2: ${dice2}`} />
        </div>
        </div>
      </div>
      
      <Button className='text-xl' size="lg" onClick={rollDice}>Roll Dice</Button>
    </div>
  );
};

export default DiceRoller;
