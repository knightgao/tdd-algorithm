export function modifiedBinarySearch(array,target){
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

    // while 结束的时候，必定是 left > right 的时候
    // 可能的结果  此时 【left,right】 区间里的所有数值 都小于target
    // left = 0 , right = -1; 插入目标位置是 0 ， right + 1;
    // 可能的结果  此时 【left,right】 区间里的所有数值 都大于target
    // [left,right] left = length , right = length - 1; ,插入目标位置是 length， right + 1
    // 可能的结果，此时 targer 的位置 大于 left , 小于 right
    // [left,target,right]  比如可能是  array [2,4] target 3 ,第一步 left=0,right=1 ; mid = 0; 执行完一轮后 left <= right
    //  left  = 1 , right = 1,  mid = 1 ，再执行完一轮后  4> 3 则 right = 0,left > right while 结束
    // 插入的位置是 right + 1;

    return rightIndex + 1;
}