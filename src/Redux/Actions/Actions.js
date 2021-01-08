import Service from '../../Service/Service';
export const LOADING_INDICATOR = 'LOADING_INDICATOR';
export const FETCHING_DATA = 'FETCHING_DATA';

const service = new Service();

export function loadingIndicator(){
    return{
        type: LOADING_INDICATOR
    }
}
export function fetchData(){

    // return dispatch =>{
    //     dispatch(loadingIndicator());
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    //         dispatch({
    //             type: FETCHING_DATA,
    //             payload: res.data
    //         })
    //     })
    // }
    return dispatch =>{
        dispatch(loadingIndicator());
        service.getAnime().then(res=>{
            const data = res.data.data.map(item=>{
               return item.attributes;
            });
            dispatch({
                type: FETCHING_DATA,
                payload: data
            })
        });
    }
}
