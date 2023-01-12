import { useParallax } from 'react-scroll-parallax';
import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import artboard from '../Images/artboard.png';

const StoryDesign = ({ children }) => {
  const target = useRef(null);
  return (
    <>
      <div className="text-sm">
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default StoryDesign;
