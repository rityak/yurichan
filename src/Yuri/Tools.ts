type yuriMessageTriggers = [];
type yuriMessageTrigger = [] | string;
interface yuriTriggersAccept {
  status: boolean;
}

const punctuation =
  '\\[\\!\\"\\#\\$\\%\\&\\\\(\\)\\*\\+\\,\\\\\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\_\\`\\{\\|\\}\\~\\]';
const regExpPunctuation = new RegExp(`[${punctuation}]`, 'gi');

export default class YuriTools {
  static {
    const normalizeString = (string: string) =>
      string.trim().replace(regExpPunctuation, '').toLowerCase();

    const isSeries = (arrays: yuriMessageTriggers): boolean =>
      !!arrays?.find((item: yuriMessageTrigger) => Array.isArray(item));

    const contains = (
      message: string,
      triggers: yuriMessageTriggers,
    ): yuriTriggersAccept => {
      const text = normalizeString(message);
      // series = !!triggers.

      return { status: false };
    };
  }
}
