// TypewriterText.tsx
import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  text: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text }) => {
  return (
    <Typewriter
      options={{
        strings: [text],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
