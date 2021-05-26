import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Api from '../Api';

//to add new component, make new file
//to create (crud), use forms
function BusinessStoreFront() {
    const history = useHistory();

    const [shop, setShop] = useState();
    const [ownerShopPhotos, setOwnerShopPhotos] = useState([]);

    //side effects, don't directly interact with output, don't refresh when it changes
    useEffect(function () {
        Api.shops.me()
            .then((response) => {
                setShop(response.data);
                return Api.ownershopphotos.index(response.data.id);
            })
            .then((response) => {
                const length = response.data.length;
                for (let i = 3 - length; i > 0; i -= 1) {
                    response.data.push({fileImage: '', caption: ''});
                }
                setOwnerShopPhotos(response.data);
            });
    }, []);

    function onChangeOwnerShopPhoto(i, event) {
        const newOwnerShopPhoto = {...ownerShopPhotos[i]};
        newOwnerShopPhoto[event.target.name] = event.target.value;
        ownerShopPhotos[i] = newOwnerShopPhoto;
        setOwnerShopPhotos([...ownerShopPhotos]);
    }

    return (
        <main className="container">
            <h1>Show us your store front!</h1>
            <form>
                {ownerShopPhotos.map((osp, i) => <div key={i}>
                    <div className="mb-3">
                        <label className="form-label">Upload photo of store's exterior</label>
                        <input className="form-control" type="file" name="fileImage" value={osp.fileImage} onChange={(event) => onChangeOwnerShopPhoto(i, event)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Caption:</label>
                        <input className="form-control" type="text" name="caption" value={osp.caption} onChange={(event) => onChangeOwnerShopPhoto(i, event)} />
                    </div>
                </div>)}
                <Link className="btn btn-primary" to="/bestsellers">Next</Link>
            </form>
        </main>
    );
}

export default BusinessStoreFront;
