import React from 'react';
import './Layout.css'
import  { DataProvider } from '../../provider/DataProvider'
import Header from '../header/Header'
import Items  from '../items/Items';

const Layout = () =>{    

    return (
        <div>
            <DataProvider >
                <Header />
                <Items />
            </DataProvider>
        </div>
    )

}

export default Layout;