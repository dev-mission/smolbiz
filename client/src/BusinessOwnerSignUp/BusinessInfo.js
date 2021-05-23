import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function BusinessInfo() {

    //:id from Sections.js 
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shop, setShop] = useState({
        shopName: '',
        locationAddress: '',
        websiteURL: '',
        phoneNumber: '',
        shopDescription: ''
    });
    // const [communityidentity, setCommunityIdentity] = useState({
    //     identities: ''

        
    // });
    // const [shoptype, setShopType] = useState({
    //     typeOfStore: ''

        
    // });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        // Api.shops.me().then((response) => setShop(response.data));
        // Api.communityidentities.me().then((response) => setCommunityIdentity(response.data));
        // Api.shoptypes.me().then((response) => setShopType(response.data));
        Api.shops.me().then((response) => {
            if (response.status === 200) {
                setShop(response.data);
            }});
        // Api.communityidentities.me().then((response) => {
        //     if (response.status === 200) {
        //         setCommunityIdentity(response.data);
        //     }});
        // Api.shoptypes.me().then((response) => {
        //     if (response.status === 200) {
        //         setShopType(response.data);
        //     }
        // });
    }, []);

    function onChangeShop(event) {

        //new object with current objects in section array
        const newShop = { ...shop };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShop[event.target.name] = event.target.value;
        setShop(newShop);
    }

    // function onChangeCommunityIdentity(event) {

    //     //new object with current objects in section array
    //     const newCommunityIdentity = { ...communityidentity };

    //     //look for which name, and change the obj with that name with inputted 'value'
    //     //modify model (section)
    //     newCommunityIdentity[event.target.name] = event.target.value;
    //     setCommunityIdentity(newCommunityIdentity);
    // }

    // function onChangeShopType(event) {

    //     //new object with current objects in section array
    //     const newShopType = { ...shoptype };

    //     //look for which name, and change the obj with that name with inputted 'value'
    //     //modify model (section)
    //     newShopType[event.target.name] = event.target.value;
    //     setShopType(newShopType);
    // }
    
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause ownershopphoto
        try {

            //update
            if (shop.id) {
                await Api.shops.update(shop.id, shop);
            } else {
                await Api.shops.create(shop);
            };

            // if (communityidentity.id) {
            //     await Api.communityidentities.update(communityidentity.id, communityidentity);
            // } else {
            //     await Api.communityidentities.create(communityidentity);
            // };

            // if (shoptype.id) {
            //     await Api.shoptypes.update(shoptype.id, shoptype);
            // } else {
            //     await Api.shoptypes.create(shoptype);
            // }

            //add to browser history,, aka go to /sections
            history.push('/businessstorefront');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Let's set up your business!</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name of Business:</label>
                    <input className="form-control" type="text" name="shopName" value={shop.shopName} onChange={onChangeShop} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input className="form-control" type="text" name="locationAddress" value={shop.locationAddress} onChange={onChangeShop} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Website:</label>
                    <input className="form-control" type="text" name="websiteURL" value={shop.websiteURL} onChange={onChangeShop} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number:</label>
                    <input className="form-control" type="text" name="phoneNumber" value={shop.phoneNumber} onChange={onChangeShop} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Why did you start your business?</label>
                    <input className="form-control" type="text" name="shopDescription" value={shop.shopDescription} onChange={onChangeShop} />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Type of Business:</label>
                    <input className="form-control" type="text" name="typeOfStore" value={shoptype.typeOfStore} onChange={onChangeShopType} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Communities you identify with:</label>
                    <input className="form-control" type="text" name="identities" value={communityidentity.identities} onChange={onChangeCommunityIdentity} />
                </div> */}
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default BusinessInfo; 