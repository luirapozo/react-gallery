import React from 'react';
import renaConcert from '../img/rena-concert.jpg'
import renaIdol from '../img/rena-idol.jpg'
import renaKaede from '../img/rena-kaede.jpg'
import renaKawaii from '../img/rena-kawaii.jpg'
import renaMahouShoujo from '../img/rena-mahouShoujo.jpg'
import renaMomoko from '../img/rena-momoko.jpg'
import renaParu from '../img/rena-paru.jpg'
import renaSad from '../img/rena-sad.jpg'
import rena from '../img/rena.jpg'
import '../stylesheet/ImageList.css'

let images = [renaConcert, renaIdol,renaKaede,renaKawaii,renaMahouShoujo,renaMomoko,renaParu, renaSad, rena];
function ImageList({ i }) {
  return(
    <img
    className='rena'
    src={`${images[Math.abs(i)%9]}`}
    alt='rena'/>
  );

}

export default ImageList;