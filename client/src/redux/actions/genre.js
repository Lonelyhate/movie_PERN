import { MainAction } from "./main";

//Наследуемый класс по работе с данными стран
export class GenreAction extends MainAction {
    constructor(typeLoading, url, typeSuccess, typeDelete, idDelete, postData) {
        super(typeLoading, url, typeSuccess, typeDelete, idDelete, postData) //Наследование переменных из главного класса
    }

    //метод по получению данных по жанрам
    getGenre() {
        return dispatch => {
            super.justGetData(dispatch) //Наследование нужного метода из главного класса по получению данных жанров, то есть функционал попадает в этот блок
        }
    }

    //метод по удаление данных по странам
    deleteGenre() {
        return dispatch => {
            super.justDelete(dispatch) //Наследование нужного метода из главного класса по удалению жанра, то есть функционал попадает в этот блок
        }
    }

    //метод добавление данных по странам
    addGenre() {
        return dispatch => {
            super.addData(dispatch) //Наследование нужного метода из главного класса по добавлению жанра, то есть функционал попадает в этот блок
        }
    }
}