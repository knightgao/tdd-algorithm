// 同向快慢双指针
export function removeElement(array,target){
    let slowIndex = 0;
    let fastIndex = 0;
    const length = array.length -1;
    while(fastIndex <= length){
        if(array[fastIndex] !== target){
            array[slowIndex++] = array[fastIndex];
        }
        fastIndex++;
    }
    return slowIndex
}