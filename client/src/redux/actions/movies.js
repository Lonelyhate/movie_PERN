import axios from 'axios';
import { MainAction } from './main';

export class MoviesAction extends MainAction {
    constructor(typeLoading, typeSuccess, search, genre, country, rating, year, typeAdd, postData, typeDelete, idDelete) {
        super(typeLoading, typeSuccess, search, genre, country, rating, year, typeAdd, postData, typeDelete, idDelete); //Наследование переменных из главного класса
    }

    //Метод по получению данных по фильмам
    getMovies() {
        return async (dispatch) => {
            dispatch({ type: this.typeLoading });
            this.response = await axios.get(
                `http://localhost:5000/api/movie?${this.search ? `&name=${this.search}` : ''}${
                    this.genre ? `&genreId=${this.genre}` : ''
                }${this.country ? `&countryId=${this.country}` : ''}${
                    this.rating ? `&rating=${this.rating}` : ''
                }${this.year ? `&year=${this.year}` : ''}
                `,
            );
            dispatch({
                type: this.typeSuccess,
                payload: this.response.data,
            });
        };
    }

    //Метод по добавлению фильмов
    addMovie() {
        return async (dispatch) => {
            this.formData = new FormData();
            this.formData.append('name', this.postData.name);
            this.formData.append('description', this.postData.description);
            this.formData.append('rating', this.postData.rating);
            this.formData.append('year', this.postData.year);
            this.formData.append('link', this.postData.link);
            this.formData.append('genreId', this.postData.genreId);
            this.formData.append('countryId', this.postData.countryId);
            this.formData.append('img', this.postData.img);

            const response = await axios.post(this.url, this.formData);
            dispatch({
                type: this.typeAdd,
                payload: response.data,
            });
        };
    }

    //Метод по удалению фильмов
    deleteMovie() {
        return (dispatch) => {
            super.justDelete(dispatch);
        };
    }
}
