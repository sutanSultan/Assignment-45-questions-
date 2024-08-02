// 3. Name Cases
let persName = "Alice";
console.log(persName.toLowerCase());
console.log(persName.toUpperCase());
console.log(persName.charAt(0).toUpperCase() + persName.slice(1).toLowerCase());

// 4. Famous Quote
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');

// 5. Famous Quote 2
let famousPerson = "Albert Einstein";
let messsage = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(messsage);

// 6. Stripping Names
let nameWithWhitespace = "\t\n Alice \n\t";
console.log(nameWithWhitespace);
console.log(nameWithWhitespace.trim());

// 7. Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 8. Favorite Number
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}.`);

// 9. Adding Comments
// My name and the date
// This program stores a person's name and prints it in different cases
let personName = "Bob";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());

// My name and the date
// This program prints a famous quote by Albert Einstein
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);

// 10. Names
let names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(name);
}

// 11. Greetings
for (let name of names) {
    console.log(`Hello, ${name}!`);
}

// 12. Your Own Array
let favoriteTransport = ["Honda motorcycle", "Tesla car", "Boeing airplane"];
for (let transport of favoriteTransport) {
    console.log(`I would like to own a ${transport}.`);
}

// 13. Guest List
let guestList = ["Albert Einstein", "Isaac Newton", "Nikola Tesla"];
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// 14. Changing Guest List
console.log(`${guestList[2]} can't make it to the dinner.`);
guestList[2] = "Marie Curie";
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// 15. More Guests
console.log("We found a bigger dinner table!");
guestList.unshift("Leonardo da Vinci");
guestList.splice(2, 0, "Galileo Galilei");
guestList.push("Stephen Hawking");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}

// 16. Shrinking Guest List
console.log("We can only invite two people for dinner.");
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
guestList.pop();
guestList.pop();
console.log(guestList);

// 17. Seeing the World
let places = ["Japan", "Norway", "Canada", "Brazil", "Australia"];
console.log(places);
console.log([...places].sort());
console.log(places);
console.log([...places].sort().reverse());
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);
places.sort().reverse();
console.log(places);

// 18. Dinner Guests
console.log(`I am inviting ${guestList.length} people to dinner.`);

// 19. Favorite things
let mountains = ["Everest", "K2", "Kangchenjunga"];
console.log(mountains);

// 20. Objects
let country = {
    name: "Japan",
    capital: "Tokyo",
    population: 126.3
};
console.log(country);



//21. Intentional Error
let numbrs = [1, 2, 3];
console.log(numbrs[3]); // This will cause an index error

// 22. Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');

console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

let agee = 25;
console.log("Is age > 20? I predict True.");
console.log(agee > 20);
console.log("Is age < 20? I predict False.");
console.log(agee < 20);

let isStudent = true;
console.log("Is isStudent == true? I predict True.");
console.log(isStudent == true);
console.log("Is isStudent == false? I predict False.");


let items = ['pen', 'pencil', 'book'];
console.log("Is 'pen' in items? I predict True.");
console.log(items[0]);
console.log("Is 'eraser' in items? I predict False.");


//23. Alien Colors #1
let alien_color = 'green';
if (alien_color == 'green') {
    console.log("Player just earned 5 points.");
}

// 24. Alien Colors #2
if (alien_color == 'green') {
    console.log("Player just earned 5 points.");
} else {
    console.log("Player just earned 10 points.");
}

// 25. Alien Colors #3
if (alien_color == 'green') {
    console.log("Player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("Player earned 10 points.");
} else if (alien_color == 'red') {
    console.log("Player earned 15 points.");
}

// 26. Stages of Life
let age = 21;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if (age >= 65) {
    console.log("The person is an elder.");
}

// 27. Favorite Fruit
let favorite_fruits = ['apple', 'banana', 'orange'];
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('grape')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('pineapple')) {
    console.log("You really like pineapples!");
}

// 28. Hello Admin
let usrnames = ['admin', 'alice', 'bob', 'charlie', 'david'];
for (let username of usrnames) {
    if (username == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// 29. No Users
usrnames = [];
if (usrnames.length == 0) {
    console.log("We need to find some users!");
}

// 30. Checking Usernames
let curent_users = ['alice', 'bob', 'charlie', 'david', 'admin'];
let new_usrs = ['eric', 'ALICE', 'george', 'DAVID', 'frank'];
for (let new_user of new_usrs) {
    if (curent_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already taken. Please choose a different username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}

// 31. Ordinal Numbers
let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numb) {
    if (number == 1) {
        console.log("1st");
    } else if (number == 2) {
        console.log("2nd");
    } else if (number == 3) {
        console.log("3rd");
    } else {
        console.log(`${number}th`);
    }
}

// 32. Pizzas
let pizas = ['pepperoni', 'margherita', 'bbq chicken'];
for (let pizza of pizas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// 30. Hello Admin
let usernames: string[] = ['admin', 'alice', 'bob', 'charlie', 'david'];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// 31. No Users
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
// }

// 32. Checking Usernames
let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'admin'];
let new_users: string[] = ['eric', 'ALICE', 'george', 'DAVID', 'frank'];

for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).concat(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already taken. Please choose a different username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}

// 33. Ordinal Numbers
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log("1st");
    } else if (number === 2) {
        console.log("2nd");
    } else if (number === 3) {
        console.log("3rd");
    } else {
        console.log(`${number}th`);
    }
}

// 34. Pizzas
let pizzas: string[] = ['pepperoni', 'margherita', 'bbq chicken'];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// 35. Animals
let animals: string[] = ['dog', 'cat', 'rabbit'];
for (let animal of animals) {
    console.log(animal);
}

for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// 36. T-Shirt
function makeShirt(size: string, message: string) {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}
make_shirt('Large', 'I love TypeScript');

// 37. Large Shirts
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Custom message');

// 38. Cities
function describe_city(city: string, country: string = 'USA') {
    console.log(`${city} is in ${country}.`);
}
describe_city('New York');
describe_city('Los Angeles');
describe_city('Tokyo', 'Japan');

//39. City Names
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('New York', 'USA'));
console.log(city_country('Tokyo', 'Japan'));

// 40. Album
function make_album(artist: string, title: string, tracks?: number) {
    let album:any = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 10));
console.log(make_album('Artist3', 'Album3'));

// 41. Magicians
let magicians: string[] = ['Harry Houdini', 'David Blaine', 'Criss Angel'];
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);

// 42. Great Magicians
function make_great(magicians: string[]): string[] {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`The Great ${magician}`);
    }
    return great_magicians;
}
let great_magicians = make_great(magicians);
show_magicians(great_magicians);

//43. Unchanged Magicians
let original_magicians: string[] = ['Harry Houdini', 'David Blaine', 'Criss Angel'];
let modified_magicians: string[] = make_great([...original_magicians]);

show_magicians(original_magicians);
show_magicians(modified_magicians);

// 44. Sandwiches
function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with the following items: ${items.join(', ')}`);
}
make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Tomato', 'Mayo');
make_sandwich('Peanut Butter', 'Jelly');

//45. Cars
function create_car(manufacturer: string, model: string, ...options: [string, any][]) {
    let car:any = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
console.log(create_car('Toyota', 'Corolla', ['color', 'blue'], ['year', 2020]));
console.log(create_car('Honda', 'Civic', ['color', 'red'], ['sunroof', true]));
