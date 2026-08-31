class Logger {
    constructor() {
        this.messageTimeouts = new Map();

    }

    /**
     * @param {number} timestamp
     * @param {string} message
     * @return {boolean}
     */
    shouldPrintMessage(timestamp, message) {

        const timeout = this.messageTimeouts.get(message);

        if (timeout > timestamp) {
            return false;
        }

        this.messageTimeouts.set(message, timestamp + 10);
        return true;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
