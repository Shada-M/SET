let arr1 = ["red", "brown", "red"];
let arr2 = [1,2,3]; 
let arr3 = ["sun","house","tree"]; 
let arr4 = ["pattern", "empty", "full"]; 




function checkSetProperty(arr) {
  
    return new Set(arr).size === 1 || new Set(arr).size === arr.length;
}

function isValidSet(arr1, arr2, arr3, arr4) {
   
    return checkSetProperty(arr1) && 
           checkSetProperty(arr2) && 
           checkSetProperty(arr3) && 
           checkSetProperty(arr4);
}


console.log (isValidSet(arr1, arr2, arr3, arr4)); 




    


