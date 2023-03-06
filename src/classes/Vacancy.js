import ChechNull from "./CheckNull";

class Vacancy {
    constructor(
        id,
        name,
        area,
        salary,
        employer
    ) {
        this.id = id,
            this.name = name,
            this.area = new ChechNull().checkNull(area),
            this.salary = new ChechNull().checkNull(salary),
            this.employer = new ChechNull().checkNull(employer)
    }
}

export default Vacancy;