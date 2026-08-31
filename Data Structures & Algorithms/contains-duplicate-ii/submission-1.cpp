class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        
        int left = 0; 
        int right = 0; 

        unordered_set<int> window;

        while (right < nums.size()) {

            if (right > k ) {
                window.erase(nums[left]);
                left++;
            }

            if (window.contains(nums[right])) {
                return true;
            }

            window.insert(nums[right]);
            right++;
        }

        return false;
    }
};