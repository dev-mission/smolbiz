import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function Bestsellers() {

    //:id from Sections.js 
    const history = useHistory();

    const [shop, setShop] = useState();
    const [items, setItems] = useState([]);

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function(){
        Api.shops.me()
            .then((response) => {
                setShop(response.data);
                return Api.items.index(response.data.id);
            })
            .then((response) => {
                const length = response.data.length;
                for (let i = 3 - length; i > 0; i -= 1) {
                    response.data.push({fileImage: '', title: '', description: '', price: ''});
                }
                setItems(response.data);
            });
    }, []);

    function onChangeItem(i, event) {

        //new object with current objects in section array
        const newItem = { ...items[i] };
        //look for which name, and change the obj with that name with inputted 'value'
        //modify model (section)
        newItem[event.target.name] = event.target.value;
        items[i] = newItem;
        setItems([...items]);
    }

    return (
        <main className="container">
            <h1>Share with us your top 3 bestsellers!</h1>
            <form>
                {items.map((item, i) => <div key={i}>
                    <div className="mb-3">
                        <label className="form-label">Item #{i + 1}:</label>
                        <input className="form-control" type="text" name="title" value={item.title} onChange={(event) => onChangeItem(i, event)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description:</label>
                        <input className="form-control" type="text" name="description" value={item.description} onChange={(event) => onChangeItem(i, event)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price:</label>
                        <input className="form-control" type="text" name="price" value={item.price} onChange={(event) => onChangeItem(i, event)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Upload photo of item:</label>
                        <input className="form-control" type="file" name="photo" value={item.fileImage} onChange={(event) => onChangeItem(i, event)} />
                    </div>
                    <hr />
                </div>)}
                <Link className="btn btn-primary" to="/">Done</Link>
            </form>
        </main>
    );
}

export default Bestsellers; 