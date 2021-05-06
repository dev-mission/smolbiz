import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function ShopTypeForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shopType, setShopType] = useState({
        typeOfStore: '',
        ShopID: ''
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.shoptypes.get(id).then((response) => setShopType(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newShopType = { ...shopType };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShopType[event.target.name] = event.target.value;
        setShopType(newShopType);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.shoptypes.update(id, shopType);
            } else{
                await Api.shoptypes.create(shopType);
            }

            //add to browser history,, aka go to /sections
            history.push('/shoptypes');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>shopType Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">typeOfStore</label>
                    <input className="form-control" type="text" name="typeOfStore" value={shopType.typeOfStore} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ShopID</label>
                    <input className="form-control" type="text" name="ShopID" value={shopType.ShopID} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(shopType)}</p>
        </main>
    );
}

export default ShopTypeForm; 