import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../config/store/globalContext';
import { Grid, Card, CardMedia, Typography, CardActionArea, CardContent } from '@material-ui/core'
import styles from './products.module.css'

function ProductMain() {
    const shoes = useContext(GlobalContext)
    return (
        <div>

            <Grid container  spacing={6} justify="center" alignItems='center'>
                
            {Object.entries(shoes).map(([key, { name, img }]) => (
                    <Grid item key={key} xs={11} sm={11} md={3} lg={3}>
                    <Link to={`/Products/${key}`}>
                        <Card  >
                            <CardActionArea  >

                                <CardMedia className={styles.card}>
                                    <img src={img} alt={name} className ={styles.img} />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" align='center' className={styles.name}>
                                        {name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                    </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default ProductMain;