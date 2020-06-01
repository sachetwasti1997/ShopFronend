import apicommunicate from '../apis/apicommunicate';

export const fetchData = () => async(dispatch) => {
    await apicommunicate.get('/')
    .then((response) => {
        dispatch({type: 'FETCH_DATA', payload: response.data});
    })
    .catch((err) => {
        console.log(err);
    })

}

export const fetchCartData = () => async(dispatch) => {
    await apicommunicate.get('/cart')
    .then((response) => {
        dispatch({type:'FETCH_CART', payload: response.data});
    })
    .catch((err) => {
        console.log(err);
    })
}

export const postData = (song) => async(dispatch) => {
    await apicommunicate.post('/add-product', song)
    .then((response)=>{
        fetchData();
    })
    .catch(err => {
        console.log(err);
    })
}

export const postCartData = (song) => async() => {
    await apicommunicate.post('/cart-add', song)
    .then((response) => {
        console.log(song);
        fetchCartData();
    })
    .catch((err) => {
        console.log(err);
    })
}

export const deleteAdminData = (id) => async(dispatch) => {
    await apicommunicate.post('/deleteadmin', id)
    .then((response) => {
        console.log("Done");
        fetchData()
    })
    .catch(err => {
        console.log(err);
    })
}

