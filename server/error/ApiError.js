//Наследуемый класс по обработке ошибок
class ApiError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message) { //Метод класса об ошибке 400 
        return new ApiError(400, message)
    }

    static internal(message) { //Метод класса об ошибке 500
        return new ApiError(500, message)
    }
}

module.exports = ApiError