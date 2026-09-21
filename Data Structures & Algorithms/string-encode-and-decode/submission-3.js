class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = [];

        for (let i = 0; i < strs.length; i++) {
            const string = strs[i];
            for (const char of string) {
                if (char === ';') {
                    encoded.push('\\;');
                } else if (char === '\\') {
                    encoded.push('\\\\');
                } else {
                    encoded.push(char);
                }


            }

            // if (i != strs.length - 1)
            encoded.push(';');
        }

        // console.log(encoded)

        if (encoded.length === 0)
            return ''

        return encoded.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '') {
            return [];
        }

        return str.split(/(?<!\\);|(?<=\\\\);/).map(string => string.replaceAll('\\;', ';').replaceAll('\\\\', '\\')).slice(0, -1);

    }
}
