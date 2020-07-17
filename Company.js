const faker = require('faker');

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            "street": faker.address.streetAddress(),
            "city": faker.address.city(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.country()
        }
    }
}

module.exports = Company;