import dirtImg from './images/dirt.jpg';
import grassImg from './images/grass.jpg';
import glassImg from './images/glass.png';
import logImg from './images/log.jpg';
import woodImg from './images/wood.png';
import { TextureLoader, NearestFilter, LinearMipMapLinearFilter  } from 'three';

export const dirt = new TextureLoader().load(dirtImg);
export const grass = new TextureLoader().load(grassImg);
export const glass = new TextureLoader().load(glassImg);
export const wood = new TextureLoader().load(woodImg);
export const log = new TextureLoader().load(logImg);

dirt.magFilter = NearestFilter;
dirt.minFilter = LinearMipMapLinearFilter;
grass.magFilter = NearestFilter;
grass.minFilter = LinearMipMapLinearFilter;
glass.magFilter = NearestFilter;
glass.minFilter = LinearMipMapLinearFilter;
wood.magFilter = NearestFilter;
wood.minFilter = LinearMipMapLinearFilter;
log.magFilter = NearestFilter;
log.minFilter = LinearMipMapLinearFilter