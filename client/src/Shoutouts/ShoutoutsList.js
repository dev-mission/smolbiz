
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function ShoutoutsList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [shoutouts, setShoutouts] = useState([]);

    useEffect(function () {
    
      Api.shoutouts.index().then(response => setShoutouts(response.data));
      }, [])

    async function onDelete(shoutout){
        if(window.confirm(`Are you sure you wish to delete ${shoutout.shoutoutTitle}?`)){
            Api.shoutouts.delete(shoutout.id).then(function() {
                   const newShoutouts = shoutouts.filter(s => s.id !== shoutout.id);
                setShoutouts(newShoutouts);
            })
        }
    }

    return (
        <main className="container">
            <h1>Shoutouts List</h1>
            <Link className="btn btn-primary" to="/shoutouts/new">New</Link>
            <ul>
                {shoutouts.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/shoutouts/${s.id}/edit`}>{s.shoutoutTitle}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ShoutoutsList;
