import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: getLocalStorage('world') || [],
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
