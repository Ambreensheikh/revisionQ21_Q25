//Q_36//make a callback function
//function make_shirt(size:string, message:string){
// console.log(`Shitr size is ${size} ,and a message ${message} print on it`);    
//}
//make_shirt("Large" , "'I love Pakistan !'");
//Q_37
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Shirt size is ${size} ,and a message ${message} print on it`);
}
make_shirt(); //default shirt size,message
make_shirt("Medium"); //default message
make_shirt("Small", "Dive Into Coding");
//Q_38
function describe_city(city, country = "Pakistan") {
    console.log(`city ${city} belongs to country ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//Q_39
function city_country(city, country) {
    console.log(`${city} , ${country}`);
}
city_country("Gazza", "Palestine");
city_country("Karachi", "Pakistan");
city_country("Paris", "France");
function make_album(artistName, albumTitle, songs) {
    return ` ${artistName}, ${albumTitle} ,${songs}`;
}
let artistName1 = make_album("Atif Aslam", "coke Studio", 2019);
let artistName2 = make_album("Rahat Fateh ali", "seher", 2020);
let artistName3 = make_album("Ali Zafar", "Jhoom", 2017);
console.log(artistName1);
console.log(artistName2);
console.log(artistName3);
export {};
