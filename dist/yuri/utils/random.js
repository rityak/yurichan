export function choice(array) {
    let result = '';
    array.forEach(arr => {
        const len = arr.length;
        const i = Math.floor(Math.random() * len);
        result += arr[i];
    });
    return result;
}
