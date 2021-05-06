
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function ShoppersList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [shoppers, setShoppers] = useState([]);

    useEffect(function () {
    
      Api.shoppers.index().then(response => setShoppers(response.data));
      }, [])

    async function onDelete(shopper){
        if(window.confirm(`Are you sure you wish to delete ${shopper.UserID}?`)){
            Api.shoppers.delete(shopper.id).then(function() {
                   const newShoppers = shoppers.filter(s => s.id !== shopper.id);
                setShoppers(newShoppers);
            })
        }
    }

    return (
        <main className="container">
            <h1>Shoppers List</h1>
            <Link className="btn btn-primary" to="/shoppers/new">New</Link>
            <ul>
                {shoppers.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/shoppers/${s.id}/edit`}>{s.UserID}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ShoppersList;
