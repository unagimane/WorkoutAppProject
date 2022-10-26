console.log('Connected');

import Lift from "./lift.js";
import User, { generateUserNumber } from "./user.js";

alert('Welcome to Swole Calculator! Please create an account.');

let newUser = new User(prompt('Enter Name'), prompt('Enter Email Address'), prompt('Enter Age'), prompt('Enter Gender'), prompt('Enter Height'), prompt('Enter Weight'), generateUserNumber());
alert('Account creation was successful! Proceed to enter the details of your first workout.');
console.log(newUser);

let newWorkout = new Lift(prompt('Enter Date'), prompt('Enter Exercise Type'), prompt('Enter Reps in the Form of an Array'), prompt('Enter Weight per Set in the Form of an Array'));
console.log(newWorkout);
alert('The Details of your workout have been saved to your account!');
