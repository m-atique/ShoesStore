import React from 'react';
import { Outlet } from 'react-router';

function Products() {
    
    return (
        <div >
            <div style={{display:'flex' ,justifyContent:'center', padding:'20px'}}><h1>PRODUCTS</h1></div>
            
            <Outlet />
        </div>
    );
}

export default Products;