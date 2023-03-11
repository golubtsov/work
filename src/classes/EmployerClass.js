import ChechNull from "./CheckNull";

export default class EmployerClass {
    constructor(id, address, description) {
        this.id = id,
            this.address = ChechNull.prototype.checkNull(address),
            this.description = ChechNull.prototype.checkNull(description)
    }
}