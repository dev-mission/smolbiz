import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function OwnerShopPhotoForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [ownershopphoto, setOwnerShopPhoto] = useState({
        caption: '',
        fileImage: '',
        ShopID: ''
        
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.ownershopphotos.get(id).then((response) => setOwnerShopPhoto(response.data));
        }
    }, []);

    function onChange(event) {

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
            if(id){
                await Api.ownershopphotos.update(id, ownershopphoto);
            } else{
                await Api.ownershopphotos.create(ownershopphoto);
            }

            //add to browser history,, aka go to /sections
            history.push('/ownershopphotos');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>OwnerShopPhoto Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Caption</label>
                    <input className="form-control" type="text" name="caption" value={ownershopphoto.caption} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ShopID</label>
                    <input className="form-control" type="text" name="ShopID" value={ownershopphoto.ShopID} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">FileImage</label>
                    <input className="form-control" type="text" name="fileImage" value={ownershopphoto.fileImage} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(ownershopphoto)}</p>
        </main>
    );
}

export default OwnerShopPhotoForm; 