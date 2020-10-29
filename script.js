let first_array = [1, 2, 3, 4, 5, 6];
let new_array = [];
function reverseArray (first_array) {  
    for(let i=first_array.length-1; i>=0; i--) {
        new_array.push(first_array[i]);
    }
return first_array;
} 
reverseArray (first_array);
console.log(new_array);


