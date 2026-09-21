class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';

        for (let i = 0; i < strs.length; i++) {
            const string = strs[i];
            for (const char of string) {
                if (char === ';') {
                    encoded += '\\;';
                } else if (char === '\\') {
                    encoded += '\\\\';
                } else {
                    encoded += char;
                }


            }

            // if (i != strs.length - 1)
            encoded += ';';
        }

        // console.log(encoded)

        return encoded;
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
