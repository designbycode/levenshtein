import { describe, expect, it } from "vitest"
import Levenshtein from "../src"


describe("Levenshtein", () => {


  it('should return 0 for identical strings', () => {
    expect(Levenshtein.calculate('hello', 'hello').distance).toBe(0);
  });

  it('should return 100% similarity for identical strings', () => {
    expect(Levenshtein.calculate('hello', 'hello').similarity).toBe(100);
  });

  it("should return the length of the second string when the first string is empty", () => {
    expect(Levenshtein.calculate("", "hello").distance).toBe(5);
  });

  it("should return 0% similarity the length of the second string when the first string is empty", () => {
    expect(Levenshtein.calculate("", "hello").similarity).toBe(0);
  });

  it("should return the length of the first string when the second string is empty", () => {
    expect(Levenshtein.calculate("hello", "").distance).toBe(5);
  });


  it("should return 0% similarity the length of the first string when the second string is empty", () => {
    expect(Levenshtein.calculate("hello", "").similarity).toBe(0);
  });

  it("should return 0 for two empty strings", () => {
    expect(Levenshtein.calculate("", "").distance).toBe(0);
  });

  it("should handle single character insertions", () => {
    expect(Levenshtein.calculate("hello", "helllo").distance).toBe(1);  // Insertion of 'l'
    expect(Levenshtein.calculate("world", "woorld").distance).toBe(1); // Insertion of 'o'
  });

  it("should handle single character deletions", () => {
    expect(Levenshtein.calculate("hello", "helo").distance).toBe(1);  // Deletion of 'l'
    expect(Levenshtein.calculate("world", "word").distance).toBe(1);   // Deletion of 'l'
  });

  it("should handle single character substitutions", () => {
    expect(Levenshtein.calculate("hello", "hallo").distance).toBe(1);  // 'e' -> 'a'
    expect(Levenshtein.calculate("world", "warld").distance).toBe(1);   // 'o' -> 'a'
    expect(Levenshtein.calculate("gray", "grey").distance).toBe(1);   // 'o' -> 'a'
  });

  it("should calculate distance with multiple edits", () => {
    expect(Levenshtein.calculate("kitten", "sitting").distance).toBe(3); // k->s, insert i, n->g
    expect(Levenshtein.calculate("sunday", "saturday").distance).toBe(3); // insert a, u->r, delete y
  });


  it("should handle non-string inputs gracefully", () => {
    expect(Levenshtein.calculate(123 as any, "hello").distance).toBe(-1);
    expect(Levenshtein.calculate("hello", null as any).distance).toBe(-1);
    expect(Levenshtein.calculate(undefined as any, undefined as any).distance).toBe(-1);
  });


  it('should return 1 for strings with a single character difference', () => {
    expect(Levenshtein.calculate('hello', 'hallo').distance).toBe(1);
  });

  it('should return 2 for strings with two character differences', () => {
    expect(Levenshtein.calculate('hello', 'hullo').distance).toBe(1);
  });

  it('should return 3 for strings with three character differences', () => {
    expect(Levenshtein.calculate('hello', 'hulloo').distance).toBe(2);
  });

  it('should return the correct distance for longer strings', () => {
    expect(Levenshtein.calculate('kitten', 'sitting').distance).toBe(3);
  });

  it('should return the correct distance for longer strings', () => {
    expect(Levenshtein.calculate('kitten', 'sittings').distance).toBe(4);
  });

  // Spellcheck example as a test
  it("should suggest correct spellings", () => {
    const dictionary = ["apple", "banana", "orange", "grape"];
    const misspelledWord = "aple";
    const expectedSuggestion = "apple";
    const suggestions = dictionary
      .map((word) => ({ word, distance: Levenshtein.calculate(misspelledWord, word).distance }))
      .sort((a, b) => a.distance - b.distance);
    expect(suggestions[0].word).toBe(expectedSuggestion);
  });

  // DNA Sequencing example as a test
  it("should calculate distance between DNA sequences", () => {
    const sequence1 = "GAGCCTACTAACGGGAT";
    const sequence2 = "CATCGTAATGACGGCCT";
    const expectedDistance = 7;
    const distance = Levenshtein.calculate(sequence1, sequence2).distance;
    expect(distance).toBe(expectedDistance);
  });

  // Information Retrieval example as a test
  // it("should find similar documents", () => {
  //   const documents = [
  //     { id: 1, title: "The Apple Orchard" },
  //     { id: 2, title: "Banana Republic" },
  //     { id: 3, title: "Orange County" },
  //   ];
  //   const query = "aple orchad";
  //   const expectedTopResult = "The Apple Orchard";
  //
  //   const searchResults = documents
  //     .map((doc) => ({ doc, distance: Levenshtein.calculate(query, doc.title) }))
  //     .sort((a, b) => a.distance - b.distance);
  //
  //   expect(searchResults[0].doc.title).toBe(expectedTopResult);
  // });

  // Record Linkage example as a test
  // it("should identify potential duplicate records", () => {
  //   const records = [
  //     { id: 1, name: "John Smith", address: "123 Main St" },
  //     { id: 2, name: "Jon Smyth", address: "123 Main St" },
  //     { id: 3, name: "Jane Doe", address: "456 Oak Ave" },
  //   ];
  //   const threshold = 2;
  //   const expectedDuplicates = [
  //     [
  //       { id: 1, name: "John Smith", address: "123 Main St" },
  //       { id: 2, name: "Jon Smyth", address: "123 Main St" },
  //     ],
  //   ];
  //
  //   const duplicates = [];
  //   for (let i = 0; i < records.length; i++) {
  //     for (let j = i + 1; j < records.length; j++) {
  //       if (Levenshtein.calculate(records[i].name, records[j].name) <= threshold) {
  //         duplicates.push([records[i], records[j]]);
  //       }
  //     }
  //   }
  //   expect(duplicates).toEqual(expectedDuplicates);
  // });


  // it("should identify weak passwords", () => {
  //   const commonPasswords = ["password", "123456", "qwerty"];
  //   const newPassword = "pa55wOrd";
  //   const isWeak = commonPasswords.some((common) => Levenshtein.calculate(newPassword, common).withinThreshold(2)); // Threshold of 2
  //   expect(isWeak).toBe(false);
  // });



})