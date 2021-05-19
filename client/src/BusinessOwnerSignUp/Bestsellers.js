import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function Bestsellers() {

    //:id from Sections.js 
    const history = useHistory();

    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [item, setItem] = useState({
        title: '',
        price: '',
        description: '',
        fileImage: ''
        
    });
    

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        
        Api.items.me().then((response) => {
            if (response.status === 200) {
                setItem(response.data);
            }});
    }, []);

    function onChangeItem(event) {

        //new object with current objects in section array
        const newItem = { ...item };

        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newItem[event.target.name] = event.target.value;
        setItem(newItem);
    }

    
    //async function execute (multitasking) js continue running when server connects
    async function onSubmit(event) {
        event.preventDefault();

        try {
             
            //update
            if (item.id) {
                await Api.items.update(item.id, item);
            } else {
                await Api.items.create(item);
            };

            //add to browser history,, aka go to /sections
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>Share with us your top 3 bestsellers!</h1>
            <form onSubmit={onSubmit}>

                <div className="mb-3">
                    <label className="form-label">Item #1:</label>
                    <input className="form-control" type="text" name="title" value={item.title} onChange={onChangeItem} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input className="form-control" type="text" name="description" value={item.description} onChange={onChangeItem} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price:</label>
                    <input className="form-control" type="text" name="price" value={item.price} onChange={onChangeItem} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Upload photo of item:</label>
                    <input class="form-control" type="file" name="photo" value={item.fileImage} onChange={onChangeItem} id="formFile" />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Bestsellers; 