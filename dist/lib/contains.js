export function normalizeString(text) {
    const punctuation = '\\[\\!\\"\\#\\$\\%\\&\\\\(\\)\\*\\+\\,\\\\\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\_\\`\\{\\|\\}\\~\\]';
    const punctuationSplit = new RegExp(`[${punctuation}]`, 'gi');
    return text.trim().replace(punctuationSplit, '').toLowerCase() || '';
}
export default function contains(message, triggers = []) {
    const triggerSeries = !!triggers.find((item) => Array.isArray(item));
    const text = normalizeString(message);
    const result = triggerSeries
        ? triggers.every(trig => trig instanceof Array && trig.some((t) => text.includes(t)))
        : triggers.some(trig => text.includes(trig.toString()));
    return result;
}
