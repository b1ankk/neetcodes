class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {

        const stack = [];

        for (let i = 0; i < asteroids.length; i++) {
            stack.push(asteroids[i]);

            while (stack.length > 1 && stack.at(-2) > 0 && stack.at(-1) < 0) {
                const curr = stack.pop();
                const last = stack.pop();
                if (Math.abs(curr) > Math.abs(last)) {
                    stack.push(curr);
                } else if (Math.abs(curr) < Math.abs(last)) {
                    stack.push(last);
                }
            }

        }

        return stack;

    }
}
