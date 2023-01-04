export function choice(array) {
    if (Array.isArray(array)) {
        const len = array.length;
        const i = Math.floor(Math.random() * len);
        return array[i];
    }
}
export function chance(floatValue = 0.5) {
    return Math.random() >= floatValue;
}
export function randomNumber(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}
export function gameCube(val = 1) {
    let result = '';
    for (let i = 0; i < val; i++) {
        result += randomNumber() + ' ';
    }
    return result;
}
