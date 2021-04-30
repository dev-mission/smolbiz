
//skills list code
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../Api';

function BadgesList() {
    //model-- skills
    //controller-- the code, choosing what to be rendered
    //presentation-- whats printed

    const [badges, setBadges] = useState([]);

    useEffect(function () {
    
      Api.badges.index().then(response => setBadges(response.data));
      }, [])

    async function onDelete(badge){
        if(window.confirm(`Are you sure you wish to delete ${badge.badgeEarned}?`)){
            Api.badges.delete(badge.id).then(function() {
                   const newBadges = badges.filter(s => s.id !== badge.id);
                setBadges(newBadges);
            })
        }
    }

    return (
        <main className="container">
            <h1>Badges List</h1>
            <Link className="btn btn-primary" to="/badges/new">New</Link>
            <ul>
                {badges.map(s => (
                    <li key={s.id}>
                        <p><Link to={`/badges/${s.id}/edit`}>{s.badgeEarned}</Link></p>
                        <p> <button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default BadgesList;
