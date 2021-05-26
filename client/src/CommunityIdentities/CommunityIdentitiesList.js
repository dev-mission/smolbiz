//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function CommunityIdentitiesList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [communityidentities, setCommunityIdentities] = useState([]);

    useEffect(function () {
    
      Api.communityidentities.index().then(response => setCommunityIdentities(response.data));
      }, [])

    async function onDelete(communityIdentity){
        if(window.confirm(`Are you sure you wish to delete ${communityIdentity.identities}?`)){
            Api.communityidentities.delete(communityIdentity.id).then(function() {
                   const newCommunityIdentities = communityidentities.filter(s => s.id !== communityIdentity.id);
                setCommunityIdentities(newCommunityIdentities);
            })
        }
    }

    return (
        <main className="container">
            <h1>CommunityIdentities List</h1>
            <Link className="btn btn-primary" to="/communityidentities/new">New</Link>
            <ul>
                {communityidentities.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/communityidentities/${s.id}/edit`}>{s.identity}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default CommunityIdentitiesList;
