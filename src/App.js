
import './App.module.css';
import MainRouter from './config/MainRtr'
import { Link } from 'react-router-dom'
import styles from './App.module.css'
import shoes from './config/store/images/shoes.png'



function App() {
  return (

    <div className={styles.bckg}>

      <div className={styles.navbar}>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={shoes} alt='Logo' className={styles.logo} />
          <h1 style={{marginLeft:'30px'}}>AR Shoes</h1>
        </div>
        <div>
          <Link to='/' className={styles.links}>Home</Link>
          <Link to='products' className={styles.links}>Products</Link>
          <Link to='about' className={styles.links}>About</Link>
        </div>

      </div>
      <div>
        <MainRouter />
      </div>
      <div className={styles.Bottom}>
        <div className={styles.btlinks} >
          <div>
            <h4 style={{ color: 'darkblue' }}>Mobile:03338722136</h4>
          </div>
          <div>
            <h4 style={{ color: 'darkblue' }}>e-mail : atiquenwl@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
