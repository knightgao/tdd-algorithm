export function  removeDuplicates(array){
    
    const length = array.length;
    if(length === 0){
        return 0
    }

    let fastIndex = 1;
    let slowIndex = 1;

    while(fastIndex < length){
        if(array[fastIndex] !== array[fastIndex-1]){
            array[slowIndex] = array[fastIndex];
            slowIndex++;
        }
        fastIndex++;
    }

    return slowIndex;

} 