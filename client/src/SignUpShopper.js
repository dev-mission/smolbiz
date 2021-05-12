import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from './Api';

//to add new component, make new file
//to create (crud), use forms
function SignUpShopper() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [shopper, setShopper] = useState({
        UserId: 0,
        zipcode: 0
    });

    const [user, setUser] = useState({
      photo: '',
      birthday: 0,
      gender: ''
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.shoppers.get(id).then((response) => setShopper(response.data));
            Api.users.get(id).then((response) => setUser(response.data));
        }
    }, []);

    function onChange(event) {
        //new object with current objects in section array
        const newShopper = { ...shopper };
        const newUser = {...user };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newShopper[event.target.name] = event.target.value;
        newUser[event.target.name] = event.target.value;
        setShopper(newShopper);
        setUser(newUser);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.shoppers.update(id, shopper);
                await Api.users.update(id, user);
            } else{
                await Api.shoppers.create(shopper);
                await Api.users.create(user);
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
                  <input class="form-control" type="file" name = "photo" value={user.photo} onChange={onChange} id="formFile" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Birthday:</label>
                    <input className="form-control" type="date" name="birthday" value={user.birthday} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <input className="form-control" type="text" name="gender" value={user.gender} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Bio:</label>
                    <input className="form-control" type="text" name="bio" value={shopper.bio} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location:</label>
                    <input className="form-control" type="text" name="zipCode" value={shopper.zipCode} onChange={onChange} />
                </div>
                
                <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </main>    
    );
  }
  export default SignUpShopper;