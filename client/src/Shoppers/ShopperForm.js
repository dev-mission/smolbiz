import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function ShopperForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shopper, setShopper] = useState({
        UserID: 0,
        zipcode: 0
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.shoppers.get(id).then((response) => setShopper(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newShopper = { ...shopper };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShopper[event.target.name] = event.target.value;
        setShopper(newShopper);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.shoppers.update(id, shopper);
            } else{
                await Api.shoppers.create(shopper);
            }

            //add to browser history,, aka go to /sections
            history.push('/shoppers');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Shopper Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">User ID</label>
                    <input className="form-control" type="text" name="UserID" value={shopper.UserID} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">zipcode</label>
                    <input className="form-control" type="text" name="zipcode" value={shopper.zipcode} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(shopper)}</p>
        </main>
    );
}

export default ShopperForm;