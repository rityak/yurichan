export default function getLogger(logStatus = false) {
    return function log(...args) {
        args = args.map((item) => {
            if (typeof item === 'string')
                return item.trim();
            return item;
        });
        if (logStatus)
            console.log(...args);
    };
}
