import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function ShoutoutForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shoutout, setShoutout] = useState({
        UserID: 0,
        ShopID: 0,
        shoutoutText: '',
        shoutoutTitle: ''
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.shoutouts.get(id).then((response) => setShoutout(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newShoutout = { ...shoutout };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShoutout[event.target.name] = event.target.value;
        setShoutout(newShoutout);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.shoutouts.update(id, shoutout);
            } else{
                await Api.shoutouts.create(shoutout);
            }

            //add to browser history,, aka go to /sections
            history.push('/shoutouts');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Shoutout Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="shoutoutTitle" value={shoutout.shoutoutTitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Shoutout Text</label>
                    <input className="form-control" type="text" name="shoutoutText" value={shoutout.shoutoutText} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(shoutout)}</p>
        </main>
    );
}

export default ShoutoutForm;