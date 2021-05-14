
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function UserShopPhotosList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [usershopphotos, setUserShopPhotos] = useState([]);

    useEffect(function () {
    
      Api.usershopphotos.index().then(response => setUserShopPhotos(response.data));
      }, [])

    async function onDelete(usershopphoto){
        if(window.confirm(`Are you sure you wish to delete ${usershopphoto.caption}?`)){
            Api.usershopphotos.delete(usershopphoto.id).then(function() {
                   const newUserShopPhotos = usershopphotos.filter(s => s.id !== usershopphoto.id);
                setUserShopPhotos(newUserShopPhotos);
            })
        }
    }

    return (
        <main className="container">
            <h1>UserShopPhotos List</h1>
            <Link className="btn btn-primary" to="/usershopphotos/new">New</Link>
            <ul>
                {usershopphotos.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/usershopphotos/${s.id}/edit`}>{s.caption}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default UserShopPhotosList;
