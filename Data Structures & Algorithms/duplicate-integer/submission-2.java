class Solution {
    public boolean hasDuplicate(int[] nums) {
        var set = new HashSet<Integer>(nums.length);

        for (int i = 0; i < nums.length; i++) {
            var num = nums[i];
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }

        return false;
    }
}