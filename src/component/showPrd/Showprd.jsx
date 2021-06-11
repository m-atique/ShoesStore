
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import {GlobalContext} from '../../config/store/globalContext'
import styles from './Showprd.module.css'


function Showprd() {
  
    const shoes = useContext(GlobalContext)
    console.log(shoes)
    const {key}=useParams()
    const shoe = shoes[key]
    const {name,img} =shoe
    return (

        <div key ={key} className={styles.mdiv}>
            <div><h1 style={{fontStretch:'ultra-expanded',fontSize:'3vw'}}>{name}</h1></div>
            

            <div style={{display:'flex',flexWrap:'wrap'}}>
                <div className={styles.imgdiv}>
                <div className={styles.imgdiv2}>
                <img src={img} alt="" className={styles.img}/>
                </div>
                </div>
                <div className={styles.typoge}>
                    <div className ={styles.typoge1}><h1>$ 120</h1> </div>
                    <div className ={styles.typoge2}><h3>Comforable  Airy Smoother </h3></div>
                </div>
            </div>
            
        </div>
        // 
        //     <h1>{name}</h1>
        //    
           

        // </div>
    );
}

export default Showprd;