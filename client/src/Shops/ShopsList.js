
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function ShopsList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [shops, setShops] = useState([]);

    useEffect(function () {
    
      Api.shops.index().then(response => setShops(response.data));
      }, [])

    async function onDelete(shop){
        if(window.confirm(`Are you sure you wish to delete ${shop.shopName}?`)){
            Api.shops.delete(shop.id).then(function() {
                   const newShops = shops.filter(s => s.id !== shop.id);
                setShops(newShops);
            })
        }
    }

    return (
        <main className="container">
            <h1>Shops List</h1>
            <Link className="btn btn-primary" to="/shops/new">New</Link>
            <ul>
                {shops.map(s => (
                    <li key={s.id}>
<<<<<<< HEAD
                        <p><Link to={`/shops/${s.id}/edit`}>{s.shopName}</Link></p>
=======
                        <p><Link to={`/shops/${s.id}/edit`}>{s.title}</Link></p>
>>>>>>> origin
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ShopsList;
