import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function BadgeForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [badge, setBadge] = useState({
        ShopperId: 0,
        badgeEarned: ''
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.badges.get(id).then((response) => setBadge(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newBadge = { ...badge };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newBadge[event.target.name] = event.target.value;
        setBadge(newBadge);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.badges.update(id, badge);
            } else{
                await Api.badges.create(badge);
            }

            //add to browser history,, aka go to /sections
            history.push('/badges');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Badge Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Shopper ID</label>
                    <input className="form-control" type="text" name="ShopperID" value={badge.ShopperId} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Badge Earned</label>
                    <input className="form-control" type="text" name="badgeEarned" value={badge.badgeEarned} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(badge)}</p>
        </main>
    );
}

export default BadgeForm;