import React, { useState, useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import { images } from "../images/images"

export const BlockSelector = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture] = useStore((state) => [state.texture]);

  useEffect(() => {
    setVisible(true);
    const hudVisibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => {
      clearTimeout(hudVisibilityTimeout);
    };
  }, [setVisible, activeTexture]);

  return (
    visible && (
      <div className="fixed centered scale3x block-selector">
        {Object.entries(images).map(([key, value], i) => {
          return (
            <div key={key} className='relative'>
              <span className='absolute'>{i + 1}</span>
              <img
                isActive={activeTexture === key}
                className={`${activeTexture === key ? "active" : ""}`}
                src={value}
                alt={key}
              />
            </div>
          );
        })}
      </div>
    )
  )
};
