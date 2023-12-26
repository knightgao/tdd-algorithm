
export function binarySearch(array,target){
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    // [leftIndex,rightIndex] 有意义
    while(leftIndex <= rightIndex){
        const midIndex = leftIndex + ((rightIndex-leftIndex) >> 1);
        if(array[midIndex] === target){
            return midIndex
        } else if(array[midIndex] < target){
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }

    return -1;
}