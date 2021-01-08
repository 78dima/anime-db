import {FETCHING_DATA, LOADING_INDICATOR} from '../Actions/Actions';

const initialState = {
    cartItems: [],
    loading: false
};

export default function cartItemsReducer(state = initialState, action){
    switch (action.type){
        case LOADING_INDICATOR:
            return {
                ...state,
                loading: true
            }
        case FETCHING_DATA:
            const data = action.payload.map(item=>{
                return {
                    title: item.slug,
                    description: item.description,
                    ageRating: item.ageRating,
                    ratingAnime: item.averageRating,
                    episodes: item.episodeCount,
                    image: item.posterImage,
                    animeStart: item.startDate,
                    animeEnd: item.endDate,
                    status: item.status,
                }
            });

            return{
                ...state,
                cartItems: data,
                loading: false
            }
        default: return state
    }

}