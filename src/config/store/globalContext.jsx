import {createContext} from 'react';
import img1 from './images/Nike-Air.png'
import img2 from './images/air-force-2018.png'
import img3 from './images/Racer-pace.png'
import img4 from './images/nikeconX.png'
import img5 from './images/nike-air-zoom.png'
import img6 from './images/nike-brown-air.png'
import img7 from './images/Vorner-nike.png'
import img8 from './images/wildhorse-7.png'
import img9 from './images/air-force-1-crater.png'
import img10 from './images/air-max-270.png'
import img11 from './images/metcon-5.png'
import img12 from './images/free-x-metcon-2.png'




const shoes = {
 
    'Nike-brown-air': {
        name:"NIKE BROWN",
        img:img1,            
        bg:'radial-gradient(circle at right top ,rgb(51, 136, 138),rgb(8,69,82),rgb(5, 57, 68)'
        
    },
   'air-force-2018': {
        name: "JORDAN MARS 270 LONDON",
        img: img2,
        bg:'radial-gradient(circle at right top ,rgb(240, 154, 154),rgb(208,77,77),rgb(196, 60, 60))'
        },
    'Racer-pace': {
        name: "RACER BLUE",
        img: img3,
        bg:'radial-gradient(circle at right top ,rgb(236, 195, 158),rgb(190, 139, 85),rgb(155, 115, 66))'
    },
    'nikeconX': {
        name:"NIKE CONX",
        img:img4,            
        bg:'radial-gradient(circle at right top ,rgb(36, 37, 37),rgb(102, 98, 98),rgb(158, 157, 157))'
        
    },
   'nike-air-zoom': {
        name: "NIKE AIR ZOOM",
        img: img5,
        bg:'radial-gradient(circle at right top ,rgb(240, 154, 154),rgb(208,77,77),rgb(196, 60, 60))'
        },
    'nike-brown-air': {
        name: "AIRBROWN NIKIE",
        img: img6,
        bg:'radial-gradient(circle at right top ,rgb(78, 81, 82),rgb(54, 32, 34),rgb(36, 26, 32))'
    },
    'Vorner-nike': {
        name:"NIKE VORNER",
        img:img7,            
        bg:'radial-gradient(circle at right top ,rgb(78, 81, 82),rgb(104, 135, 153),rgb(112, 15, 80))'
        
    },
   
    'wildhorse-7': {
        name: "WILD HORSE 7",
        img: img8,
        bg:'radial-gradient(circle at right top ,rgb(6, 79, 82),rgb(76, 119, 60),rgb(223, 161, 90))'
    },
    'air-force-1-crater': {
        name:"AIR FORCCE CRATER",
        img:img9,            
        bg:'radial-gradient(circle at right top ,rgb(105, 98, 99),rgb(150, 143, 146),rgb(197, 167, 132))'
        
    },
   'air-max-270': {
        name: "AIR MAX 270",
        img: img10,
        bg:'radial-gradient(circle at right top ,rgb(240, 154, 154),rgb(208,77,77),rgb(196, 60, 60))'
        },
    'metcon-5.': {
        name: "METCON 5",
        img: img11,
        bg:'radial-gradient(circle at right top ,rgb(37, 30, 23),rgb(63, 41, 18),rgb(29, 17, 3))'
    },
    'free-x-metcon-2': {
        name: "FREE MACTON X",
        img: img12,
        bg:'radial-gradient(circle at right top ,rgb(105, 98, 99),rgb(150, 143, 146),rgb(197, 167, 132))'
        },
};
export const  GlobalContext = createContext(shoes)
