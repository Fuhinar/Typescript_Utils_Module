export type StringFunction = (str: string) => string;

export type StringRepeatFunction = (str: string, count: number) => string;
export type StringTruncateFunction = (str: string, length: number) => string;
export type StringStartsWithFunction = (str: string, searchStr: string) => boolean;
export type StringReplaceAllFunction = (str: string, search: string, replace: string) => string;

export interface StringUtils {
  capitalize: StringFunction;
  trim: StringFunction;
  repeat: StringRepeatFunction;
  toSnakeCase: StringFunction;
  toUpperCase: StringFunction;
  toLowerCase: StringFunction;
  isEmpty: (str: string) => boolean;
  reverseString: StringFunction;
  truncate: StringTruncateFunction;
  removeSpaces: StringFunction;
  countWords: (str: string) => number;
  startsWith: StringStartsWithFunction;
  endsWith: StringStartsWithFunction;
  replaceAll: StringReplaceAllFunction;
} 