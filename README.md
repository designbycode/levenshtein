# Levenshtein Distance Calculator

[![npm version](https://badge.fury.io/js/@designbycode%2Flevenshtein.svg)](https://badge.fury.io/js/@designbycode%2Flevenshtein)
![npm](https://img.shields.io/npm/dt/%40designbycode/levenshtein)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Flevenshtein)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Flevenshtein)
[![Test](https://github.com/designbycode/levenshtein/actions/workflows/test.yml/badge.svg)](https://github.com/designbycode/levenshtein/actions/workflows/test.yml)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/levenshtein?style=social)](https://github.com/DesignByCode/levenshtein/stargazers)

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
const calculate = Levenshtein.calculate('hello', 'hallo');
console.log(calculate.distance); // Output: 1
```

The `calculate` method returns the Levenshtein an object with distance between the two strings as a number. and similarity percentage.

## Error Handling

If either of the input strings is not a string, the calculate method will throw a TypeError. You can catch this error using a try-catch block:

```typescript
try {
  const calculate = Levenshtein.calculate(123, 'hello').distance;
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
const distance = Levenshtein.calculate(string1, string2).distance;
console.log(distance); // Output: 3
```

### Fuzzy String Matching

The Levenshtein distance can be used to implement fuzzy string matching. For example, you can use it to find strings that are similar to a given query string.

```typescript
const query = 'hello';
const strings = ['hallo', 'helloo', 'hellllo', 'goodbye'];
const distances = strings.map((string) => Levenshtein.calculate(query, string).distance);
console.log(distances); // Output: [1, 1, 2, 6]
```

### 5 Real-world Examples of Levenshtein Distance

```typescript
import Levenshtein from './Levenshtein'; // Assuming you have the Levenshtein class

// 1. Spell Checking/Autocorrection

const dictionary = ['apple', 'banana', 'orange', 'grape'];
const misspelledWord = 'aple';

const suggestions = dictionary
  .map(word => ({ word, distance: Levenshtein.calculate(misspelledWord, word).distance }))
  .sort((a, b) => a.distance - b.distance)
  .slice(0, 3);

console.log("Spellcheck suggestions:", suggestions);


// 2. DNA Sequencing and Bioinformatics

const sequence1 = 'GAGCCTACTAACGGGAT';
const sequence2 = 'CATCGTAATGACGGCCT';

const distance = Levenshtein.calculate(sequence1, sequence2).distance;
console.log(`DNA Sequence Distance: ${distance}`);


// 3. Information Retrieval and Search Engines

const documents = [
  { id: 1, title: "The Apple Orchard" },
  { id: 2, title: "Banana Republic" },
  { id: 3, title: "Orange County" }
];

const query = "aple orchad";

const searchResults = documents
  .map(doc => ({ doc, distance: Levenshtein.calculate(query, doc.title).distance }))
  .sort((a, b) => a.distance - b.distance)
  .slice(0, 2); // Top 2 results

console.log("Search Results:", searchResults);


// 4. Record Linkage and Data Deduplication

const records = [
  { id: 1, name: "John Smith", address: "123 Main St" },
  { id: 2, name: "Jon Smyth", address: "123 Main St" },
  { id: 3, name: "Jane Doe", address: "456 Oak Ave" }
];

const threshold = 2;
const duplicates = [];

for (let i = 0; i < records.length; i++) {
  for (let j = i + 1; j < records.length; j++) {
    if (Levenshtein.calculate(records[i].name, records[j].name).distance <= threshold) {
      duplicates.push([records[i], records[j]]);
    }
  }
}

console.log("Potential Duplicates:", duplicates);


// 5. Password Strength Meters

const commonPasswords = ["password", "123456", "qwerty"];
const newPassword = "pa55wOrd";

const isWeak = commonPasswords.some(common => Levenshtein.calculate(newPassword, common).distance <= 2);

if (isWeak) {
  console.log("Password is too similar to a common password.");
} else {
  console.log("Password seems OK.");
}

```

## License

The Levenshtein Distance Calculator is licensed under the MIT License. See the LICENSE file for details.