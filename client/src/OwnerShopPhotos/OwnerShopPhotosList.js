
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function OwnerShopPhotosList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [ownershopphotos, setOwnerShopPhotos] = useState([]);

    useEffect(function () {
    
      Api.ownershopphotos.index().then(response => setOwnerShopPhotos(response.data));
      }, [])

    async function onDelete(ownershopphoto){
        if(window.confirm(`Are you sure you wish to delete ${ownershopphoto.caption}?`)){
            Api.ownershopphotos.delete(ownershopphoto.id).then(function() {
                   const newOwnerShopPhotos = ownershopphotos.filter(s => s.id !== ownershopphoto.id);
                setOwnerShopPhotos(newOwnerShopPhotos);
            })
        }
    }

    return (
        <main className="container">
            <h1>OwnerShopPhotos List</h1>
            <Link className="btn btn-primary" to="/ownershopphotos/new">New</Link>
            <ul>
                {ownershopphotos.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/ownershopphotos/${s.id}/edit`}>{s.caption}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default OwnerShopPhotosList;
