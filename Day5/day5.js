//Spread Operator using array and object
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const arr3=[...arr1,...arr2];
// console.log(arr3);
// const obj={
//     Name:"Ruthresh",
//     Age:"18"
// }
// const obj1={
//     Address:"Theni"
// }
// const obj2={...obj,...obj1};
// console.log(obj2);

// const obj1={
//     Address:"Theni"
// }
// const arr2=[4,5,6];
// const arr3={...obj1,...arr2};
// console.log(arr3);
//Rest Operator
// function func(a,num,...b){   
//      console.log(b);
// }
// func("Hello",1,2,3,4,5,"Hai");
// function func(...a){
// for(let i=1;i<4;i++){
//     a[i]=a[0]*a[i];
//     }
//     a[0]*=a[0];
//     return a;
// }
// console.log(func(8,2,3,4));
//Unpacking
// let names=["Ruth","Waseef","Vel"];
// let[a,b,c]=names;
// console.log(a,b,c);
// let names={
//     a:"Ruth",
//     b:"18",
//     c:{
//         street:"123 st",
//         city:"Theni"
//     }
// }
// function get({a,b,c}) {
//     console.log(a,b,c.street); 
// }
// get(names); 
// console.log(b);
// console.log(c);
//Callback Function
// function func1(ans){
//    console.log(ans);
// }
// function func2(a,b,c,d){
//     if(c=="add"){
//         return d(a+b);
//     }
//     else if(c=="sub"){
//         return d(a-b);
//     }
// }
// func2(10,25,"add",func1);
// func2(10,25,"sub",func1);
//Even or odd using callback fn
// function f1(f,...a){
//     let b=[],j=0;
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2==0){
//             b[j]=a[i];
//             j++;
//         }
//     }
//     return f(b);
// }
// function f2(x){
//     console.log(x);
// }
// f1(f2,1,2,3,4,5,6,7,8,9,10);
//Promises
 function fetchData(){
    return new Promise((resolve,reject)=>{
         let data="Hello";
         resolve(data);
 })}
 fetchData()
     .then(data=>{
        console.log('Success',data);
     })
     .catch(error=>{
        console.log('Fail',error);
     });