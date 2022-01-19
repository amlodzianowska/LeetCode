var twoSum = function(nums, target) {
    var sum;
    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<nums.length; j++){
            if (i != j) {
                sum = nums[i] + nums[j]
                if (sum == target){
                    return [i,j]
                }
            }
        }
    }
    return false
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,5,6,10,18,27,35], 45))
console.log(twoSum([], 9))