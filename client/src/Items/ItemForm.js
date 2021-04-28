import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function ItemForm() {

    //:id from Sections.js 
    const {id} = useParams();
    const history = useHistory();
    
    //initial value of section (in this case, obj with name, slug, and position attributes)
    const [item, setItem] = useState({
        ShopId: '',
        title: '',
        description: '',
        price: 0
    });
    const [shops, setShops] = useState([]);

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        Api.shops.index().then((response) => {
            //set the loaded shops list into the shops state
            setShops(response.data);
            //if there are shops, set the first into the item
            if (response.data.length > 0) {
                const newItem = { ...item };
                newItem.ShopId = response.data[0].id;
                setItem(newItem);
            }
        });
        if(id){
            Api.items.get(id).then((response) => setItem(response.data));
        }
    }, [id]);

    function onChange(event) {

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

        //might cause error, wrap in try
        try {

            //update
            if(id){
                await Api.items.update(id, item);
            } else{
                await Api.items.create(item);
            }

            //add to browser history,, aka go to /sections
            history.push('/items');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="container">
            <h1>item Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Shop</label>
                    <select className="form-control" name="ShopId">
                        {shops.map((s) => <option value={s.id}>{s.shopName}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" name="title" value={item.title} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" name="description" value={item.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input className="form-control" type="text" name="price" value={item.price} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(item)}</p>
        </main>
    );
}

export default ItemForm;