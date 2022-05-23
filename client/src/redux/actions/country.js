import { MainAction } from './main';

//Наследуемый класс по работе с данными стран
export class CountryAction extends MainAction {
    constructor(typeLoading, url, typeSuccess, typeDelete, idDelete, postData) { 
        super(typeLoading, url, typeSuccess, typeDelete, idDelete, postData);//Наследование переменных из главного класса
    }

    //метод по получению данных по странам
    getCountries() {
        return (dispatch) => {
            super.justGetData(dispatch); //Наследование нужного метода из главного класса по получению данных стран, то есть функционал попадает в этот блок
        };
    }

    //Метод по добавлению стран
    addCountry() {
        return (dispatch) => {
            super.addData(dispatch); //Наследование нужного метода из главного класса по добавлению страны, то есть функционал попадает в этот блок
        };
    }

    deleteCountry() {
        return (dispatch) => {
            super.justDelete(dispatch); //Наследование нужного метода из главного класса по удалению страны, то есть функционал попадает в этот блок
        };
    }
}
