import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from './Api';

//to add new component, make new file
//to create (crud), use forms
function SignUpShopper() {

    //:id from Sections.js 
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shopper, setShopper] = useState({
        bio: '',
        zipcode: ''
    });

    const [user, setUser] = useState({
        photo: '',
        birthday: '',
        gender: ''
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function () {
        Api.users.me().then((response) => setUser(response.data));
        Api.shoppers.me().then((response) => {
            if (response.status === 200) {
                setShopper(response.data);
            }
        });
    }, []);

    function onChangeUser(event) {
        //new object with current objects in section array
        const newUser = { ...user };
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    }

    function onChangeShopper(event) {
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
            await Api.users.update(user.id, user);
            if (shopper.id) {
                await Api.shoppers.update(shopper.id, shopper);
            } else {
                await Api.shoppers.create(shopper);
            }
            //update '/' with profile link
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Sign up for a free account!</h1>
            <form onSubmit={onSubmit}>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Upload a Picture of Yourself!</label>
                    <input class="form-control" type="file" name="photo" value={user.photo} onChange={onChangeUser} id="formFile" />
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
                    <input className="form-control" type="text" name="bio" value={shopper.bio} onChange={onChangeShopper} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Zip code:</label>
                    <input className="form-control" type="text" name="zipCode" value={shopper.zipCode} onChange={onChangeShopper} />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}
export default SignUpShopper;
