
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function KudosList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [kudos, setKudos] = useState([]);

    useEffect(function () {
    
      Api.kudos.index().then(response => setKudos(response.data));
      }, [])

    async function onDelete(kudo){
        if(window.confirm(`Are you sure you wish to delete ${kudo.id}?`)){
            Api.kudos.delete(kudo.id).then(function() {
                   const newKudos = kudos.filter(s => s.id !== kudo.id);
                setKudos(newKudos);
            })
        }
    }

    return (
        <main className="container">
            <h1>Kudos List</h1>
            <Link className="btn btn-primary" to="/kudos/new">New</Link>
            <ul>
                {kudos.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/kudos/${s.id}/edit`}>{s.id}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default KudosList;
