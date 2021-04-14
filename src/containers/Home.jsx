import React from 'react'
import Products from '../components/Products';

import initialState from '../initialSatate';


export default function Home() {
    return (
        <Products products={initialState.products} />
    )
}
