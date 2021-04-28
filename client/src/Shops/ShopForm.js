import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function ShopForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shop, setShop] = useState({
        UserID: 0,
        phoneNumber: 0,
        shopName: '',
        websiteURL: '',
        locationAddress: '',
        shopDescription: '',
        ownerBio: '',
        businessHours: '',
        price: 0
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.shops.get(id).then((response) => setItem(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newShop = { ...shop };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShop[event.target.name] = event.target.value;
        setShop(newShop);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.shops.update(id, shop);
            } else{
                await Api.shops.create(shop);
            }

            //add to browser history,, aka go to /sections
            history.push('/shops');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Shop Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">UserID</label>
                    <input className="form-control" type="integer" name="UserID" value={shop.UserID} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" type="integer" name="phoneNumber" value={shop.phoneNumber} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Shop Name</label>
                    <input className="form-control" type="string" name="shopName" value={shop.shopName} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Website URL</label>
                    <input className="form-control" type="string" name="websiteURL" value={shop.websiteURL} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location Address</label>
                    <input className="form-control" type="string" name="locationAddress" value={shop.locationAddress} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Shop Description</label>
                    <input className="form-control" type="string" name="shopDescription" value={shop.shopDescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Owner Bio</label>
                    <input className="form-control" type="text" name="ownerBio" value={shop.ownerBio} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Business Hours</label>
                    <input className="form-control" type="text" name="businessHours" value={shop.businessHours} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(item)}</p>
        </main>
    );
}

export default ShopForm;