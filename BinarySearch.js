
function binarySearch(array,target){
    let left=0;
    let right =  array.length - 1;

    while(left <= right){
        let mid= Math.floor((right + left)/2);

        if(array[mid]===target){
            return mid;
        }
        if(array[mid]< target){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
        
    }

    return -1;
}






const array=[1,3,4,8,19,20,25,30,32,56,]
const target=25;

const result = binarySearch(array,target)

if(result == -1){
    console.log("aradığınız değer bulunamadı");
}
else{
    console.log("aradığınız değer bulundu ve indexi: " + result);
}