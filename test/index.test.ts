import { describe, expect, it } from "vitest"
import Levenshtein from "../src"


describe("Levenshtein", () => {


  it('should return 0 for identical strings', () => {
    expect(Levenshtein.calculate('hello', 'hello')).toBe(0);
  });

  it('should return 1 for strings with a single character difference', () => {
    expect(Levenshtein.calculate('hello', 'hallo')).toBe(1);
  });

  it('should return 2 for strings with two character differences', () => {
    expect(Levenshtein.calculate('hello', 'hullo')).toBe(1);
  });

  it('should return 3 for strings with three character differences', () => {
    expect(Levenshtein.calculate('hello', 'hulloo')).toBe(2);
  });

  it('should return the correct distance for longer strings', () => {
    expect(Levenshtein.calculate('kitten', 'sitting')).toBe(3);
  });

  it('should return the correct distance for longer strings', () => {
    expect(Levenshtein.calculate('kitten', 'sittings')).toBe(4);
  });

})