import ChechNull from "./CheckNull";

export default class EmployerClass {
    constructor(id, name, description) {
        this.id = id,
            this.name = name,
            this.description = ChechNull.prototype.checkNull(description)
    }
}