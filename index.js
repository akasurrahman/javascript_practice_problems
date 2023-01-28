/**..........................................................................................................*/
/**..........................................................................................................*/

/**Question-1(a):You are given an array:
var fruits = ['Apple','Banana','Orange'];
(a).Find the index of 'Banana' and replace 'Banana' with 'Mango'.
(b).Remove 'Orange' and add 'Watermelon'.
Problem Solution-1(a):
var fruits = ['Apple', 'Banana', 'Orange'];
fruits[1] = 'Mango';
console.log(fruits);
................................................................................................................
Problem Solution-1(b):
var fruits = ['Apple', 'Banana', 'Orange'];
fruits.pop();
fruits.push('Watermelon');
console.log(fruits); */

/**..........................................................................................................*/
/**..........................................................................................................*/
/**Question-2:You and your friends Tom,Jane,Peter and John got their final exam results.Your total score is 85,Tom's total score is 66,Jane's total score is 95,Peter's total score is 56 and Jhon's total score is 40.The grading chart is:
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade 
39 or less =>F grade.write a program to find your and your friends grades using if-else.
Problem Solution-2:
var grade = 23;
if(grade>=80){
    console.log('Your Grade is: A');
}
else if(grade>=60){
    console.log('Your Grade is: B');
}
else if(grade>=50){
    console.log('Your Grade is: C');
}
else if(grade>=40){
    console.log('Your Grade is: D');
}
else if(grade<=39){
    console.log('Failed');
}
else{
        console.log('Your result not found!')
} */
/**..........................................................................................................*/
/**..........................................................................................................*/
/**Question-3:
(a):You are given three numbers 13,79 and 45.write a program that will print the largest number using if-else.
(b).You are given a triangle with the sides 9,8,9.write a program to check whether a triangle is Isosceles or not using if-else.
................................................................................................................
Practice Problem-3(a):
num1 = 13;
num2 = 79;
num3 = 45;
if (num1 >= num2 && num1 >= num3) {
  console.log(13 + "is largest number");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(79 + " is largest number");
} else {
  console.log(45 + " is largest number");
}
................................................................................................................
Practice Problem-3(b):
var side1 = 9;
var side2 = 9;
var base = 8;
if (side1 == side2 && side1 != base && side2 != base) {
  console.log("Two sides are equal");
} else {
  console.log("Base");
} */
