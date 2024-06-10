//Q21: INTERFACE
//it is used only for objects
interface item{
    name: string,
    price: number
}
//making two objects
let car:item = {
    name: "Toyota Corolla",
    price: 2000000
};
let motorBike :item = {
    name : "Honda",
    price : 90000
};
//console.log(`car name: ${car.name} ,car price: ${car.price}`);
//console.log(`motorbike name: ${motorBike.name} ,motorbike price: ${motorBike.price}`);
//Q22
  //Intentional error
  let startArray:string[] = ["chips", "candies", "chocolates"];
  //produce an index error
  console.log(startArray[4]);
  //correct the error
  console.log(startArray[2]);
  
  //Q_23
  //conditional tests
  //test no1: EQUALITY WITH STRING
  let Car:string = "Sabaru";
  console.log("is car == 'Sabaru'? I predict its true")  ;//true
  console.log(Car == "Sabaru");
  //test no2 : inequality with string
  console.log("is Car !== 'Sabaru' ? I predict its true");  //true
  console.log(Car !== "Sabaru");
  //test no 3: equality with string
  let van = "Toyota";
  console.log("is van == 'Toyota'? I predict its true");//true
  console.log(van == "Toyota");
  //test no4: inequality with string
  console.log("is van !== 'Toyota'? I predict its false");//false
  console.log(van !== 'Toyota');
  //test no5:equality with lowercase
  let Book = "The Journey";
  console.log("is Book.toLowerCase() == the Journey? Ipredict its true");//true
  console.log(Book == "The Journey");
  //test no6: inequality with lowerCase
  console.log("is Book.toLowerCase() !== the Journey? Ipredict its false");//false
  console.log(Book !== "The Journey");
  //test no7:numbers in equality
  let age = 25;
  console.log("is age === 25 ?I predict its true");  //true
  console.log(age === 25);
  //test no 8:inequality in numbers
  console.log("is age !== 25 ?I predict its false");  //false
  console.log(age !== 25);
  //test no 9: number is greater than
  console.log("is age > 30? I predict its false");   //true
  console.log(age > 30);
  //test no 10 less than or equal
  console.log("is age <= 25? I predict its true");   //true
  console.log(age <= 25);
//test no 11: &&
console.log("is age > 20 && age < 30   I predict its true");   //true
console.log(age > 20 && age < 30);
//TEST NO 12:|| LOGICAL 'OR' OPERATOR
console.log("is age > 30 || age < 19  I predict its FALSE");   //FALSE
console.log(age > 20 || age < 30);
//Q_24
//Test weather an item is in  an array
let colors :string[]= ["red", "yellow", "pink", "blue"];
console.log(colors.includes("red"));
console.log(colors.includes("green"));//answer in boolean

//Q_25
//create a variable
let alian_color:string = "green";
//if alian color is green
if( alian_color ==="green"){
    console.log("The player just earned 5 points for shooting the alian");
}else{
    console.log("The player just earned 10 points");
    //if alian color is not green
    if(alian_color === "Yellow"){
        console.log("The player just earned 10 points for shooting the alian");
    }else{
        console.log("The player just earned 5 points");
        }
        }
    

    
    






  
  
  

  
  

  
  
  
  
   
  

  
  
  
  