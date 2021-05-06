//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function ShopTypesList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [shoptypes, setShopTypes] = useState([]);

    useEffect(function () {
    
      Api.shoptypes.index().then(response => setShopTypes(response.data));
      }, [])

    async function onDelete(shopType){
        if(window.confirm(`Are you sure you wish to delete ${shopType.typeOfStore}?`)){
            Api.shoptypes.delete(shopType.id).then(function() {
                   const newShopTypes = shoptypes.filter(s => s.id !== shopType.id);
                setShopTypes(newShopTypes);
            })
        }
    }

    return (
        <main className="container">
            <h1>ShopTypes List</h1>
            <Link className="btn btn-primary" to="/shoptypes/new">New</Link>
            <ul>
                {shoptypes.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/shoptypes/${s.id}/edit`}>{s.typeOfStore}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ShopTypesList;
