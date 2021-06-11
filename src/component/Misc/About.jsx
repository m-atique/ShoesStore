import React from 'react'
import {Grid} from '@material-ui/core'
import me from '../../config/store/images/me.png'
import styles from './Misc.module.css'

function About (){
    return(
        <Grid container>
            <Grid item xs={12} md={6} sm ={6}>
                <div>
                    <div className={styles.picDiv}>
                        <img src={me} alt="" className={styles.pic} />
                    </div>
                        <div className={styles.belowpic}></div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} sm ={6}className ={styles.div2}>
                <h1 style={{fontSize:'48px'}}> About Us</h1>
                <h4> We are a full service digital consultancy with experience and capacity to meet the needs of even the largest most complex of organizations in the world. Our services portfolio enables us to offer clients the best of experiences when working with our teams so as to make sure we keep the focus on their needs, customers and delivering tangible value to the business. End to end services; endless ideas. </h4>
            </Grid>
        </Grid>
    )
}

export default About