class Solution {
    public boolean hasDuplicate(int[] nums) {
        var set = new HashSet<Integer>(nums.length);

        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }

        return false;
    }
}