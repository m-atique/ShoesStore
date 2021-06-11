import React, { useContext, useState, useEffect } from 'react';
import { Grid, Hidden} from '@material-ui/core'
import styles from './Home.module.css'
import cx from 'classnames'
import {Link} from 'react-router-dom'

import { GlobalContext } from '../../config/store/globalContext'
import git from '../../config/store/images/github.png'
import fb from '../../config/store/images/facebook.png'
import linked from '../../config/store/images/linkedin.png'

function Home() {
    const shoes = useContext(GlobalContext)

    const [i, setValue] = useState(0)
    const keys = Object.keys(shoes)
    const totalShoes = Object.keys(shoes).length



    useEffect(() => {
        setTimeout(() => {
            if (i < totalShoes - 2) {
                setValue(i + 1)
                console.log(i + 1)
            }
            else (
                setValue(0)
            )
        }, 2000);

    })
    return (
        <Grid container spacing={1} justify="center" alignItems="center" >
            <Hidden smDown>
                <Grid item className={cx(styles.sbGrid1)} xs={6} sm={6} md={3}>
                    <div className={cx(styles.central, styles.column, styles.fhfw)}  >
                        <div className={cx(styles.central, styles.prdDiv)}>
                            <h1 className={cx(styles.prd)}>Products</h1>
                        </div>


                    </div>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item className={cx(styles.sbGrid2)} xs={6} sm={6} md={3}>
                    <div className={cx(styles.sb, styles.column, styles.shoeDiv)} style={{ backgroundImage: shoes[keys[i]].bg }}>
                        <div style={{ position: 'relative', left: '-100px', fontSize: '30px' }}><h1>{i + 1}</h1></div>
                        <Link to={`/Products/${keys[i]}`}>
                            <div><img src={shoes[keys[i]].img} alt="" className={styles.pic} /></div>
                        </Link>
                            <div className={styles.subhead}><h3>{shoes[keys[i]].name}</h3></div>
                    </div>
                </Grid>
                <Grid item className={cx(styles.sbGrid3)} xs={6} sm={6} md={3}>
                    <div className={cx(styles.sb, styles.column, styles.shoeDiv, styles.shoeDiv2)} style={{ backgroundImage: shoes[keys[i + 1]].bg }}>
                        <div style={{ position: 'relative', left: '-100px', fontSize: '30px' }}><h1>{i + 2}</h1></div>
                        <Link to={`/Products/${keys[i+1]}`}>
                        <div><img src={shoes[keys[i + 1]].img} alt="" className={styles.pic} /></div>
                        </Link>                    
                        <div className={styles.subhead}><h3>{shoes[keys[i + 1]].name}</h3></div>
                    </div>
                </Grid>
            </Hidden>
            <Hidden smUp>
                <Grid item className={cx(styles.sbGrid2)} xs={6} sm={6} md={3}>
                    <div className={cx(styles.sb, styles.column, styles.shoeDivM)} style={{ backgroundImage: shoes[keys[i]].bg }}>
                        <div style={{ position: 'relative', left: '-10px' }}><h1>{i + 1}</h1></div>
                        <Link to={`/Products/${keys[i]}`}>
                        <div><img src={shoes[keys[i]].img} alt="" className={styles.picM} /></div>
                        </Link>
                        <div className={styles.subheadM}><h5>{shoes[keys[i]].name}</h5></div>
                    </div>
                </Grid>
                <Grid item className={cx(styles.sbGrid3)} xs={6} sm={6} md={3}>
                    <div className={cx(styles.sb, styles.column, styles.shoeDivM, styles.shoeDivM2)} style={{ backgroundImage: shoes[keys[i + 1]].bg }}>
                        <div style={{ position: 'relative', left: '-10px' }}><h1>{i + 2}</h1></div>
                        <Link to={`/Products/${keys[i+1]}`}>
                        <div><img src={shoes[keys[i + 1]].img} alt="" className={styles.picM} /></div>
                        </Link>
                        <div className={styles.subheadM}><h5>{shoes[keys[i + 1]].name}</h5></div>
                    </div>
                </Grid>
            </Hidden>

            <Hidden smDown>
                <Grid item className={cx(styles.sbGrid4, styles.central, styles.column)} xs={6} sm={6} md={3}>
                    <a href="https://web.facebook.com/muhammad.atique.5095/"><img className={styles.sclogo} src={fb} alt='facebook' /></a>
                    <a href="https://github.com/m-atique"><img className={styles.sclogo} src={git} alt='github' /></a>
                    <a href="https://www.linkedin.com/in/muhammad-atique-4960711a5/"><img className={styles.sclogo} src={linked} alt='linkedin' /></a>
                </Grid>
            </Hidden>
            <Hidden smUp>

                <Grid item className={cx(styles.central)} xs={12} sm={12} >
                    <a href="https://web.facebook.com/muhammad.atique.5095/"><img className={styles.sclogo2} src={fb} alt='facebook' /></a>
                    <a href="https://github.com/m-atique"><img className={styles.sclogo2} src={git} alt='github' /></a>
                    <a href="https://www.linkedin.com/in/muhammad-atique-4960711a5/"><img className={styles.sclogo2} src={linked} alt='linkedin' /></a>

                </Grid>
            </Hidden>
        </Grid>
    );
}

export default Home;