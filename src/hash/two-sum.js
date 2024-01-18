var twoSum = function (nums, target) {
    const hash = {};

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (hash[target - element] !== void 0) {
            return [index, hash[target - element]]
        } else {
            hash[element] = index
        }
    }

};