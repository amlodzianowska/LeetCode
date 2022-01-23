var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (!nums.includes(target)){
            if (nums[0] > target){
                return 0
            }else if (target > nums[i] && target < nums[i+1]){
                return i+1
            }else if (target > nums[nums.length-1]){
                return nums.length
            }
        }
        else if (nums[i]==target){
            return i
        }
        
    }
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5], 4))