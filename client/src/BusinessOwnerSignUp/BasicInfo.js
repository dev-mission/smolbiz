import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Api from '../Api';
import PhotoUploader from '../PhotoUploader';

//to add new component, make new file
//to create (crud), use forms
function BasicInfo() {
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shop, setShop] = useState({
        ownerBio: ''
    });
    const [user, setUser] = useState({
        photo: '',
        birthday: '',
        gender: ''        
    });
    const [isUploading, setUploading] = useState(false);

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        Api.users.me().then((response) => setUser(response.data));
        Api.shops.me().then((response) => {
            if (response.status === 200) {
                setShop(response.data);
            }});
    }, []);

    function onChangeShop(event) {

        //new object with current objects in section array
        const newShop = { ...shop };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShop[event.target.name] = event.target.value;
        setShop(newShop);
    }

    function onChangeUser(event) {
        //new object with current objects in section array
        const newUser = { ...user };
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    }

    
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause ownershopphoto
        try {

            //update
            await Api.users.update(user.id, user);
            if (shop.id) {
                await Api.shops.update(shop.id, shop);
            } else {
                await Api.shops.create(shop);
            };

            //add to browser history,, aka go to /sections
            history.push('/BusinessInfo');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Welcome to SmolBiz! Tell us more about yourself!</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Upload a Picture of Yourself!</label>
                    <PhotoUploader className="card" id="photo" name="photo" value={user.photo} onChange={onChangeUser} onUploading={setUploading}>
                        <div className="card-body">
                            <div className="card-text">
                                Drag-and-drop a photo file here, or click here to browse and select a file.
                            </div>
                        </div>
                    </PhotoUploader>
                </div>
                <div className="mb-3">
                    <label className="form-label">Birthday:</label>
                    <input className="form-control" type="date" name="birthday" value={user.birthday} onChange={onChangeUser} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <input className="form-control" type="text" name="gender" value={user.gender} onChange={onChangeUser} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Bio:</label>
                    <input className="form-control" type="text" name="ownerBio" value={shop.ownerBio} onChange={onChangeShop} />
                </div>
                <button disabled={isUploading} className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default BasicInfo; 