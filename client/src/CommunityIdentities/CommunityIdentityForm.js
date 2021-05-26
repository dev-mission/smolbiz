import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function CommunityIdentityForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [communityidentity, setCommunityIdentity] = useState({
        identity: '',
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.communityidentities.get(id).then((response) => setCommunityIdentity(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newCommunityIdentity = { ...communityidentity };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newCommunityIdentity[event.target.name] = event.target.value;
        setCommunityIdentity(newCommunityIdentity);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.communityidentities.update(id, communityidentity);
            } else{
                await Api.communityidentities.create(communityidentity);
            }

            //add to browser history,, aka go to /sections
            history.push('/communityidentities');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>CommunityIdentity Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">CommunityIdentities</label>
                    <input className="form-control" type="text" name="identity" value={communityidentity.identity} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(communityidentity)}</p>
        </main>
    );
}

export default CommunityIdentityForm; 