import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const createGroundCubes = (size) => {
  const cubes = [];
  for (let x = 0; x < size; x++) {
    for (let y = 1; y < size; y++) {
      for (let z = -size; z < 0; z++) {
        cubes.push({ pos: [x, y, z], type: y === 1 ? 'dirt' : 'wood' });
      }
    }
  }
  return cubes;
};

export const useStore = create((set) => ({
  texture: 'dirt',
  // textures,
  cubes: getLocalStorage('world') || createGroundCubes(4),
  addCube: (x, y, z, type) =>
    set((state) => ({
      cubes: [...state.cubes, { pos: [x, y, z], type }],
    })),
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [_x, _y, _z] = cube.pos;
        return _x !== x || _y !== y || _z !== z;
      }),
    }));
  },
  setTexture: (type) => {
    set((state) => ({
      texture: type,
    }));
  },
  saveWorld: () =>
    set((state) => {
      setLocalStorage('world', state.cubes);
    }),
}));
