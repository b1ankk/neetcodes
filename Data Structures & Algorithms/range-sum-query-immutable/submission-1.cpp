class NumArray {
private:
    vector<int> prefixes;
public:
    NumArray(vector<int>& nums) {
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums[i];
            prefixes.push_back(sum);
            // std::cout << sum << ' ';
        }
    } 
    
    int sumRange(int left, int right) {
        if (left == 0)
            return this->prefixes[right];

        return this->prefixes[right] - this->prefixes[left - 1];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */