# Levenshtein Distance Calculator

[![NPM](https://nodei.co/npm/@designbycode/tailwindcss-text-shadow.png?mini=true)](https://nodei.co/npm/@designbycode/levenshtein/)

[![npm version](https://badge.fury.io/js/@designbycode%2Flevenshtein.svg)](https://badge.fury.io/js/@designbycode%2Flevenshtein)
![npm](https://img.shields.io/npm/dt/%40designbycode/levenshtein)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Flevenshtein)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Flevenshtein)
[![Test](https://github.com/DesignByCode/levenshtein/actions/workflows/test.yaml/badge.svg)](https://github.com/DesignByCode/levenshtein/actions/workflows/test.yaml)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/levenshtein?style=social)](https://github.com/DesignByCode/levenshtein/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/levenshtein.svg?style=flat)](http://hits.dwyl.com/designbycode/levenshtein)

The Levenshtein Distance Calculator is a utility class that calculates the Levenshtein distance between two strings. The Levenshtein distance is a measure of the minimum number of single-character edits (insertions, deletions or 
substitutions) required to change one word into the other.

## Installation

To use this plugin

#### Using pnpm

```bash
pnpm add @designbycode/levenshtein
```

#### Using npm

```bash
npm install @designbycode/levenshtein
```

#### Using yarn

```bash
yarn add @designbycode/levenshtein
```


## Usage
### Importing the Class
To use the Levenshtein Distance Calculator, you need to import the Levenshtein class:

```typescript
import { Levenshtein } from '@designbycode/levenshtein';
```

### Calculating the Levenshtein Distance
To calculate the Levenshtein distance between two strings, call the calculate method and pass the two strings as arguments:

```typescript
const distance = Levenshtein.calculate('hello', 'hallo');
console.log(distance); // Output: 1
```

The `calculate` method returns the Levenshtein distance between the two strings as a number.


## Error Handling
If either of the input strings is not a string, the calculate method will throw a TypeError. You can catch this error using a try-catch block:

```typescript
try {
  const distance = Levenshtein.calculate(123, 'hello');
} catch (error) {
  console.error(error); // Output: TypeError: Argument 1 passed to Levenshtein::calculate() must be of the type string
}
```

## Example Use Cases
### Measuring String Similarity
The Levenshtein distance can be used to measure the similarity between two strings. A lower distance indicates that the strings are more similar.

```typescript
const string1 = 'kitten';
const string2 = 'sitting';
const distance = Levenshtein.calculate(string1, string2);
console.log(distance); // Output: 3
```

### Fuzzy String Matching
The Levenshtein distance can be used to implement fuzzy string matching. For example, you can use it to find strings that are similar to a given query string.

```typescript
const query = 'hello';
const strings = ['hallo', 'helloo', 'hellllo', 'goodbye'];
const distances = strings.map((string) => Levenshtein.calculate(query, string));
console.log(distances); // Output: [1, 1, 2, 6]
```

## License
The Levenshtein Distance Calculator is licensed under the MIT License. See the LICENSE file for details.