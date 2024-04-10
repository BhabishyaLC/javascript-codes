//Stack(Primitive data types: Numbers,Strings,Boolean,BigInt,null,undefined)
//Heap(Non-Primitive data types: Arrays,Functions,Objects)

let myName='Bhabishya'
let myName2=myName
myName2="Lamichhane"
console.log(myName);
console.log(myName2);



let user1={
    name: 'bhabishya',
    id: '1234'
}
let user2=user1
user2.name='lamichhane'
user2.id='2345'
console.log(user1.name);
console.log(user1.id);
console.log(user2.name);
console.log(user2.id);