import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated:'top_rated' 
}

export const tvType = {
    upcoming: 'upcoming',
    top_rated:'top_rated', 
    on_the_air:'on_the_air' 
}

const tmdbApi = {
    getMovieList: (type,parmas) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url,parmas);
    },
    getTvList: (type, parmas) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url,parmas);
    },
    getVideos: (cate, id) => {
        const url = category[cate] +'/' + id +  '/videos';
        return axiosClient.get(url, {parmas: {}});
    },
    search: (cate,parmas) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, parmas);
    },
    detail: (cate, id, parmas) => {
        const url =  category[cate] + '/' + id;
        return axiosClient.get(url, parmas);
    },
    credits: (cate, id) => {
        const url =  category[cate] + '/' + id  + '/credits';
        return axiosClient.get(url, {parmas: {}});
    },
    similar: (cate, id) => {
        const url =  category[cate] + '/' + id  + '/similar';
        return axiosClient.get(url, {parmas: {}});
    },
}

export default tmdbApi;