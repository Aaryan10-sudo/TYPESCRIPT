// let age: number = 10;
// console.log(age.toString());
//As we explained the age : number whenver I use age. it's gonna automatically display all the methods

/*Arrays :

let array = ["Test", 10, true];
console.log(array);
//This is a JavaScript array as JS array are dynamic so array can be of anytype

let array1: number[] = [1, 2, 3, "Name"];
console.log(array1);
//But typescript will throw the compilation error as the number array is explained..
*/

/*Tuples :

// So we use Tuples in TypeScript to assign particular types for the elements
let array2: [number, string] = [1, "Aaryan"];
console.log(array2);

//But what if you wanna store age after string what if you want output [1, 'Aaryan', 20]?
let array3: [number, string, number] = [1, "Aaryan", 20];
console.log(array3);

//It might be a boring instead we may use any datatype
let array4: any[] = [1, "Aaryan", 20];
console.log(array4);
*/

/*Enums :

//Enums is a special list of names that stands certain fixed values

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
//Here, the value of Monday is set 0 automatically , Tuesday is 1 , Wednesday is 2 and so on
console.log(Days.Thursday); //output : 3
*/

/*Functions

function Test(params: number) {
  return params < 50_000 ? params + 1 : params - 1;
}
const result = Test(10_0000);
console.log(result);


*/
