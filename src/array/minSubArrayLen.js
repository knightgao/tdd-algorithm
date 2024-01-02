export function minSubArrayLen(target,array){
    let length = array.length;

    let result = Infinity;
    let i = 0;
    let sum = 0;

    for (let j = 0; j < length; j++) {
        sum+=array[j];

        while(sum >= target){
            result = Math.min(result,j-i+1);
            sum-=array[i++]
        }
        
    }

    return result === Infinity ? 0 :result ;
}