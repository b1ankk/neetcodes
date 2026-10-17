class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {

        const stack: number[] = [];

        for (const token of tokens) {

            if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
                stack.push(Number(token));
                continue;
            }

            const right = stack.pop();
            const left = stack.pop();
            let result = null;
            if (token === '+') {
                result = left + right;
            } else if (token === '-') {
                result = left - right;
            } else if (token === '*') {
                result = left * right;
            } else if (token === '/') {
                result = Math.floor(Math.abs(left / right)) * Math.sign(left * right);
            }
            // console.log(left, right, token, result)

            stack.push(result);


        }


        return stack.pop();

    }
}
