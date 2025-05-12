import type { StringUtils } from './types';

export const stringUtils: StringUtils = {
  capitalize: (str: string): string => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  trim: (str: string): string => {
    return str.trim();
  },

  repeat: (str: string, count: number): string => {
    return str.repeat(count);
  },

  toSnakeCase: (str: string): string => {
    return str
      .replace(/\s+/g, '_')
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, '')
      .replace(/_+/g, '_');
  },

  toUpperCase: (str: string): string => {
    return str.toUpperCase();
  },

  toLowerCase: (str: string): string => {
    return str.toLowerCase();
  },

  isEmpty: (str: string): boolean => {
    return str.trim().length === 0;
  },

  reverseString: (str: string): string => {
    return str.split('').reverse().join('');
  },

  truncate: (str: string, length: number): string => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  },

  removeSpaces: (str: string): string => {
    return str.replace(/\s+/g, '');
  },

  countWords: (str: string): number => {
    return str.trim().split(/\s+/).length;
  },

  startsWith: (str: string, searchStr: string): boolean => {
    return str.startsWith(searchStr);
  },

  endsWith: (str: string, searchStr: string): boolean => {
    return str.endsWith(searchStr);
  },

  replaceAll: (str: string, search: string, replace: string): string => {
    return str.split(search).join(replace);
  },
}; 