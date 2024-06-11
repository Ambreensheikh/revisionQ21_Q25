//Q26 as it is Q25
//Q27 :alian colors
//VERSION 1
let alian_color:string = "green";
if(alian_color === "green"){
    console.log("The player earned 5 points");
 } else if(alian_color === "Yellow"){
    console.log("The player earned 10 points");
    }else if(alian_color === "Red"){
        console.log("The player earned 15 points");
        }
//if alian  color is Yellow print a message of 10 points
//VERSION 2
alian_color = "Yellow";
if(alian_color === "green"){
    console.log("The player earned 5 points");
 } else if(alian_color === "Yellow"){
    console.log("The player earned 10 points");
    }else if(alian_color === "Red"){
        console.log("The player earned 15 points");
        }
//if alian  color is red print a message of 15 points
alian_color = "Red";
if(alian_color === "green"){
    console.log("The player earned 5 points");
 } else if(alian_color === "Yellow"){
    console.log("The player earned 10 points");
    }else if(alian_color === "Red"){
        console.log("The player earned 15 points");
        }

        //Q28 : stages of life
let age :number = 18;  //set the value of variable age
if(age < 2){
    console.log("Yhe person is a baby !");//2 years old but less than 4
}else if(age >= 2 && age < 4){
    console.log("The person is a toddler !");//
}else if(age >= 4 && age < 13){
    console.log("The person is a kid !");
}else if(age >= 13 && age < 20){
    console.log("The person is a teenager !");
}else if(age >= 20 && age <65){
    console.log("The person is an adult !");
}else{
    console.log("The person is an elder !");
};

//Q29 : 
 let favFruits:string[]= ["Grapes", "Banana", "Mango"];
 if(favFruits.includes("Grapes")){
    console.log("I really like Grapes");
 }if(favFruits.includes("Mango")){
    console.log("I really like Mango");
 }if(favFruits.includes("Kiwi")){
    console.log("I really like Kiwi");
}else{
    console.log("I dont like Kiwi");
    
}
//Q 30 :make array of 5 user name
let userName:string[] = ["Admin", "Ali", "Usman","Mahad","Hamza"];
//write greeting statement
for(let i=0; i< userName.length; i++){
    if(userName[i] === "Admin"){
    console.log(`Hello ${userName[i]} , would you like to check reports !`);
    }else{
        console.log(`Hello , ${userName[i] }thank you for logging in again !`);
        
    }
    
}
    


