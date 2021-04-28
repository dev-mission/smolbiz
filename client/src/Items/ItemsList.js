
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function ItemsList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [items, setItems] = useState([]);

    useEffect(function () {
    
      Api.items.index().then(response => setItems(response.data));
      }, [])

    async function onDelete(item){
        if(window.confirm(`Are you sure you wish to delete ${item.title}?`)){
            Api.items.delete(item.id).then(function() {
                   const newItems = items.filter(s => s.id !== item.id);
                setItems(newItems);
            })
        }
    }

    return (
        <main className="container">
            <h1>Items List</h1>
            <Link className="btn btn-primary" to="/items/new">New</Link>
            <ul>
                {items.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/items/${s.id}/edit`}>{s.title}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ItemsList;
