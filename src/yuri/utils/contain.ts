import { messageHandlerType } from '../../model/messageHandlers.model.js';

const punctuation =
  '\\[\\!\\"\\#\\$\\%\\&\\\\(\\)\\*\\+\\,\\\\\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\_\\`\\{\\|\\}\\~\\]';
const regExpPunctuation = new RegExp(`[${punctuation}]`, 'gi');

export const normalizeString = (string: string) =>
  string.trim().replace(regExpPunctuation, '').toLowerCase();

export default function contain(
  message: string,
  triggers: Array<string[]>,
): boolean {
  const text = normalizeString(message);
  return triggers.every(t => t.some(s => text.includes(s)));
}
