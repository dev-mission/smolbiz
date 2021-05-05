import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function KudoForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [kudo, setKudo] = useState({
        ShopperId: 0,
        ShoutoutId: 0,
        
    });

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        if(id){
            Api.kudos.get(id).then((response) => setKudo(response.data));
        }
    }, []);

    function onChange(event) {

        //new object with current objects in section array
        const newKudo = { ...kudo };
        
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newKudo[event.target.name] = event.target.value;
        setKudo(newKudo);
    }
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.kudos.update(id, kudo);
            } else{
                await Api.kudos.create(kudo);
            }

            //add to browser history,, aka go to /sections
            history.push('/kudos');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Kudo Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">ShopperId</label>
                    <input className="form-control" type="integer" name="ShopperId" value={kudo.ShopperId} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">ShoutoutId</label>
                    <input className="form-control" type="integer" name="ShoutoutId" value={kudo.ShoutoutId} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>

            <p>{JSON.stringify(kudo)}</p>
        </main>
    );
}

export default KudoForm;