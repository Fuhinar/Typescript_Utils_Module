import { stringUtils } from './utils';

console.log('String Utilities Demo:');
console.log('---------------------');

console.log('capitalize:', stringUtils.capitalize('typescript'));
console.log('trim:', stringUtils.trim('   Hello World   '));
console.log('repeat:', stringUtils.repeat('abc', 3));
console.log('toSnakeCase:', stringUtils.toSnakeCase('Hello World Again'));
console.log('toUpperCase:', stringUtils.toUpperCase('hello'));
console.log('toLowerCase:', stringUtils.toLowerCase('HELLO'));
console.log('isEmpty (with spaces):', stringUtils.isEmpty('    '));
console.log('isEmpty (with content):', stringUtils.isEmpty('content'));
console.log('reverseString:', stringUtils.reverseString('abcdef'));
console.log('truncate:', stringUtils.truncate('This is a long text', 10));
console.log('removeSpaces:', stringUtils.removeSpaces('a b c d e f'));
console.log('countWords:', stringUtils.countWords('one two three four'));
console.log('startsWith (true):', stringUtils.startsWith('TypeScript', 'Type'));
console.log('startsWith (false):', stringUtils.startsWith('TypeScript', 'Script'));
console.log('endsWith (true):', stringUtils.endsWith('TypeScript', 'Script'));
console.log('endsWith (false):', stringUtils.endsWith('TypeScript', 'Type'));
console.log('replaceAll:', stringUtils.replaceAll('hello hello hello', 'hello', 'hi')); 