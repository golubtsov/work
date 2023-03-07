import Vacancy from "./Vacancy";
import ChechNull from "./CheckNull";

class BigVacancy extends Vacancy {
    constructor(
        id,
        name,
        area,
        salary,
        employer,
        experience,
        schedule,
        employment,
        description,
        key_skills
    ) {
        super(
            id,
            name,
            area,
            salary,
            employer
        );
        this.experience = experience,
            this.schedule = schedule,
            this.employment = new ChechNull().checkNull(employment),
            this.description = new ChechNull().checkNull(description),
            this.key_skills = new ChechNull().checkNull(key_skills)
    }
}

export default BigVacancy;