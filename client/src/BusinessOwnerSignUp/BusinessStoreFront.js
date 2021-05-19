import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function BusinessStoreFront() {

    //:id from Sections.js 
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [ownershopphoto, setOwnerShopPhoto] = useState({
        caption: '',
        fileImage: ''
        
    });
    

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        
        Api.ownershopphotos.me().then((response) => {
            if (response.status === 200) {
                setOwnerShopPhoto(response.data);
            }});
    }, []);

    function onChangeOwnerShopPhoto(event) {

        //new object with current objects in section array
        const newOwnerShopPhoto = { ...ownershopphoto };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newOwnerShopPhoto[event.target.name] = event.target.value;
        setOwnerShopPhoto(newOwnerShopPhoto);
    }

    
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause ownershopphoto
        try {

            //update
            if (ownershopphoto.id) {
                await Api.ownershopphotos.update(ownershopphoto.id, ownershopphoto);
            } else {
                await Api.ownershopphotos.create(ownershopphoto);
            };

            //add to browser history,, aka go to /sections
            history.push('/bestsellers');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Show us your store front!</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Upload photo of store's exterior</label>
                    <input class="form-control" type="file" name="photo" value={ownershopphoto.fileImage} onChange={onChangeOwnerShopPhoto} id="formFile" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Caption:</label>
                    <input className="form-control" type="text" name="caption" value={ownershopphoto.caption} onChange={onChangeOwnerShopPhoto} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload photo of store's interior</label>
                    <input class="form-control" type="file" name="photo" value={ownershopphoto.fileImage} onChange={onChangeOwnerShopPhoto} id="formFile" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Caption:</label>
                    <input className="form-control" type="text" name="caption" value={ownershopphoto.caption} onChange={onChangeOwnerShopPhoto} />
                </div>
                
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default BusinessStoreFront; 