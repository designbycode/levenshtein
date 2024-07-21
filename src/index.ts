

class Levenshtein {
    /**
     * Calculate the Levenshtein distance between two strings.
     *
     * The Levenshtein distance is a measure of the minimum number of single-character edits
     * (insertions, deletions or substitutions) required to change one word into the other.
     *
     * @param str1 The first string.
     * @param str2 The second string.
     * @returns The Levenshtein distance between the two strings.
     */
    public static calculate(str1: string, str2: string): number {

      // Create a 2D array to store the distances between substrings of str1 and str2
      const distanceMatrix: number[][] = [];

      // Initialize the first row and column of the matrix
      const str1Length: number = str1.length;
      const str2Length: number = str2.length;
      for (let i: number = 0; i <= str1Length; i++) {
        distanceMatrix[i] = [i]; // Distance from empty string to str1 substrings
      }
      for (let j: number = 0; j <= str2Length; j++) {
        distanceMatrix[0][j] = j; // Distance from empty string to str2 substrings
      }

      // Iterate through the characters of str1 and str2
      for (let i: number = 1; i <= str1Length; i++) {
        for (let j: number = 1; j <= str2Length; j++) {
          // Calculate the cost of substitution (0 if characters match, 1 if they don't)
          const substitutionCost: number = (str1[i - 1] === str2[j - 1]) ? 0 : 1;

          // Calculate the minimum distance between the current substrings
          const insertionDistance: number = distanceMatrix[i - 1][j] + 1; // Insert a character into str1
          const deletionDistance: number = distanceMatrix[i][j - 1] + 1; // Delete a character from str1
          const substitutionDistance: number = distanceMatrix[i - 1][j - 1] + substitutionCost; // Substitute a character in str1

          // Choose the minimum distance
          distanceMatrix[i][j] = Math.min(insertionDistance, deletionDistance, substitutionDistance);
        }
      }

      // Return the Levenshtein distance between the entire strings
      return distanceMatrix[str1Length][str2Length];
    }
  }

  export default Levenshtein;