import React, { useEffect, useState } from 'react';
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
        shopDescription: '',
        ShopTypes: [],
        CommunityIdentities: []
    });
    const [communityIdentities, setCommunityIdentities] = useState([]);
    const [shopTypes, setShopTypes] = useState([]);

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        Api.shops.me().then((response) => {
            if (response.status === 200) {
                setShop(response.data);
            }
        });
        Api.communityidentities.index().then((response) => setCommunityIdentities(response.data));
        Api.shoptypes.index().then((response) => setShopTypes(response.data));
    }, []);

    function onChangeShop(event) {
        //new object with current objects in section array
        const newShop = { ...shop };
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShop[event.target.name] = event.target.value;
        setShop(newShop);
    }

    function hasShopType(shopTypeId) {
        for (const shopType of shop.ShopTypes) {
            if (shopType.id === parseInt(shopTypeId)) {
                return true;
            }
        }
        return false;
    }

    function onChangeShopType(event) {
        const newShop = { ...shop };
        if (hasShopType(event.target.value)) {
            newShop.ShopTypes = newShop.ShopTypes.filter((shopType) => shopType.id !== parseInt(event.target.value))
        } else {
            newShop.ShopTypes.push({id: parseInt(event.target.value)});
        }
        setShop(newShop);
    }

    function hasCommunityIdentity(communityIdentityId) {
        for (const communityIdentity of shop.CommunityIdentities) {
            if (communityIdentity.id === parseInt(communityIdentityId)) {
                return true;
            }
        }
        return false;
    }

    function onChangeCommunityIdentity(event) {
        const newShop = { ...shop };
        if (hasCommunityIdentity(event.target.value)) {
            newShop.CommunityIdentities = newShop.CommunityIdentities.filter((communityIdentity) => communityIdentity.id !== parseInt(event.target.value))
        } else {
            newShop.CommunityIdentities.push({id: parseInt(event.target.value)});
        }
        setShop(newShop);
    }

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
                <div className="mb-3">
                    <label className="form-label">Type of Business:</label>
                    <div>
                        {shopTypes.map((st) => <React.Fragment key={st.id}>
                            <input type="checkbox" className="btn-check" id={`ShopTypes[${st.id}]`} checked={hasShopType(st.id)} onChange={onChangeShopType} value={st.id} autoComplete="off" />
                            <label className="btn btn-outline-primary me-2" htmlFor={`ShopTypes[${st.id}]`}>{st.typeOfStore}</label>
                        </React.Fragment>)}
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Communities you identify with:</label>
                    <div>
                        {communityIdentities.map((ci) => <React.Fragment key={ci.id}>
                            <input type="checkbox" className="btn-check" id={`CommunityIdentities[${ci.id}]`} checked={hasCommunityIdentity(ci.id)} onChange={onChangeCommunityIdentity} value={ci.id} autoComplete="off" />
                            <label className="btn btn-outline-primary me-2" htmlFor={`CommunityIdentities[${ci.id}]`}>{ci.identity}</label>
                        </React.Fragment>)}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default BusinessInfo;
