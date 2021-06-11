import {Routes,Route } from 'react-router-dom'
import {Home,Products,ProductMain,ShowPrd,About,NotFound} from '../component/index'



function MainRtr() {
    
    return (
        <div>
            <Routes>
                <Route path = '/' element={<Home />}></Route>
                <Route path = '/about' element={<About />}></Route>
                <Route path='products' element={<Products />}>
                    <Route path = '/' element = {<ProductMain/>} />
                    <Route path = ':key' element = {<ShowPrd />} />
                    <Route path = '*' element={<NotFound />}></Route>
                </Route>
                <Route path = '*' element={<NotFound />}></Route>
               
            </Routes>
            
        </div>
    );
}

export default MainRtr;
