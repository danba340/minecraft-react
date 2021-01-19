import React, { useState, useEffect } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import { useStore } from '../hooks/useStore';
import * as textures from '../textures';

const Material = ({ args, color, texture, isActive, ...props }) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" args={args} />
      {[...Array(6)].map((_, index) => {
        return (
          <meshStandardMaterial
            attachArray="material"
            map={texture}
            key={index}
            transparent={true}
            opacity={isActive ? 1 : 0.3}
          />
        );
      })}
    </mesh>
  );
};

const MaterialContainer = ({ args, color, activeTexture, ...props }) => {
  const activeTextureIndex = Object.keys(textures).indexOf(activeTexture);
  return (
    <mesh {...props}>
      {Object.keys(textures).map((key, index) => {
        return (
          <Material
            key={key}
            isActive={activeTextureIndex === index}
            texture={textures[key]}
            args={[0.2, 0.2, 0.05]}
            position={[-0.5 + index / 4, 0, 0.01]}
          />
        );
      })}
      <boxBufferGeometry attach="geometry" args={args} />

      <meshStandardMaterial
        attach="material"
        color={color}
        transparent={true}
      />
    </mesh>
  );
};

export const Hud = ({ position }) => {
  const { camera } = useThree();
  const [hudState, setHudState] = useState(() => ({
    position: camera.position,
    rotation: [0, 0, 0],
    opacity: 0,
  }));
  const [hudVisible, setHudVisible] = useState(false);
  const [activeTexture] = useStore((state) => [state.texture]);
  useFrame(() => {
    const { x, y, z } = camera.position;
    const { x: rotX, y: rotY, z: rotZ } = camera.rotation;
    setHudState({
      position: [x, y, z],
      rotation: [rotX, rotY, rotZ],
      opacity: hudVisible ? 1 : 0,
    });
  });

  useEffect(() => {
    setHudVisible(true);
    const hudVisibilityTimeout = setTimeout(() => {
      setHudVisible(false);
    }, 2000);
    return () => {
      clearTimeout(hudVisibilityTimeout);
    };
  }, [setHudVisible, activeTexture]);
  return (
    hudVisible && (
      <group position={hudState.position} rotation={hudState.rotation}>
        <group position={position}>
          <MaterialContainer
            args={[1.3, 0.3, 0.01]}
            color="#222"
            activeTexture={activeTexture}
            hudVisible={hudVisible}
          />
        </group>
      </group>
    )
  );
};
