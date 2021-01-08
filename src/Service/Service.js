import axios from 'axios';
export default class Service{
    _baseApi = 'https://kitsu.io/api/edge';

    async getResource(url){
        return axios(`${this._baseApi}${url}`);
    }

    async getAnime(){
        const res = await this.getResource('/anime/');
        return res;
    }

    _transformAnime(data){
        // return{
        //     title: data.data.attributes.slug,
        //     description: data.description,
        //     ageRating: data.ageRating,
        //     ratingAnime: data.averageRating,
        //     episodes: data.episodeCount,
        //     image: data.posterImage,
        //     animeStart: data.startDate,
        //     animeEnd: data.endDate,
        //     status: data.status,
        // }
    }
}