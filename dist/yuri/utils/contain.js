const punctuation = '\\[\\!\\"\\#\\$\\%\\&\\\\(\\)\\*\\+\\,\\\\\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\_\\`\\{\\|\\}\\~\\]';
const regExpPunctuation = new RegExp(`[${punctuation}]`, 'gi');
export const normalizeString = (string) => string.trim().replace(regExpPunctuation, '').toLowerCase();
export default function contain(message, triggers) {
    const text = normalizeString(message);
    return triggers.every(t => t.some(s => text.includes(s)));
}
//# sourceMappingURL=contain.js.map