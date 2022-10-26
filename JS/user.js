export default class User {
    constructor(name, email, age, gender, height, weight, accountID) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.accountID = accountID;
        
    }

}

export let generateUserNumber = () => {
    let userNumber = Math.floor(Math.random() * 50000);
    console.log(`Your Account ID is ${userNumber}.`); 
    return userNumber
    
}


