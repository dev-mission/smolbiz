import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function UserShopPhotoForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [usershopphoto, setUserShopPhoto] = useState({
        caption: '',
        fileImage: '',
        ShopId: '',
        UserId: '',
        ShoutoutId: ''
        
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.usershopphotos.get(id).then((response) => setUserShopPhoto(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newUserShopPhoto = { ...usershopphoto };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newUserShopPhoto[event.target.name] = event.target.value;
        setUserShopPhoto(newUserShopPhoto);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        try {

            //update
            if(id){
                await Api.usershopphotos.update(id, usershopphoto);
            } else{
                await Api.usershopphotos.create(usershopphoto);
            }

            //add to browser history,, aka go to /sections
            history.push('/usershopphotos');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>UserShopPhoto Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Caption</label>
                    <input className="form-control" type="text" name="caption" value={usershopphoto.caption} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ShopId</label>
                    <input className="form-control" type="number" name="ShopId" value={usershopphoto.ShopId} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">UserId</label>
                    <input className="form-control" type="number" name="UserId" value={usershopphoto.UserId} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ShoutoutId</label>
                    <input className="form-control" type="number" name="ShoutoutId" value={usershopphoto.ShoutoutId} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">FileImage</label>
                    <input className="form-control" type="text" name="fileImage" value={usershopphoto.fileImage} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(usershopphoto)}</p>
        </main>
    );
}

export default UserShopPhotoForm; 