import axios from 'axios'; //Импорт 

//Главный класс по работе данными
export class MainAction {
    //конструктр класса, который принимает объект с нужными данными для работы класса
    constructor({
        typeLoading = null,
        url = null,
        typeSuccess = null,
        search = null,
        genre = null,
        country = null,
        rating = null,
        year = null,
        typeAdd = null,
        postData = null,
        typeDelete = null,
        idDelete = null,
    }) {
        //Занесение данных из объекта в переменные класса
        this.typeLoading = typeLoading;
        this.url = url;
        this.typeSuccess = typeSuccess;
        this.search = search;
        this.genre = genre;
        this.country = country;
        this.rating = rating;
        this.year = year;
        this.typeAdd = typeAdd;
        this.postData = postData;
        this.typeDelete = typeDelete;
        this.idDelete = idDelete;
    }

    //Метод класса - стандартный по получению каких либо данных при запросе
    async justGetData(dispatch) {
        if (this.typeLoading) {
            dispatch({
                type: this.typeLoading,
            });
        }

        this.response = await axios.get(this.url);
        dispatch({
            type: this.typeSuccess,
            payload: this.response.data,
        });
    }

    //Метод класса - стандартный по добавлению данных на сервер
    async addData(dispatch) {
        this.response = await axios.post(this.url, this.postData)
        dispatch({
            type: this.typeAdd,
            payload: this.response.data
        })
    }

    //Метод класса - станартный по удалению данных
    async justDelete(dispatch) {
        this.response = await axios.delete(this.url + '/' + this.idDelete);
        dispatch({
            type: this.typeDelete,
            payload: this.idDelete,
        });
    }
}
