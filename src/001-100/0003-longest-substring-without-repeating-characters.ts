/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
* 0 <= s.length <= 5 * 10^4
* s consists of English letters, digits, symbols and spaces.
*/

export function lengthOfLongestSubstring(inputString: string): number {
  const characterToIndexMap = new Map<string, number>();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < inputString.length; windowEnd++) {
    const currentCharacter = inputString[windowEnd];

    if (characterToIndexMap.has(currentCharacter)) {
      const lastSeenIndex = characterToIndexMap.get(currentCharacter)!;
      windowStart = Math.max(windowStart, lastSeenIndex + 1);
    }

    characterToIndexMap.set(currentCharacter, windowEnd);
    const currentWindowLength = windowEnd - windowStart + 1;
    maxLength = Math.max(maxLength, currentWindowLength);
  }

  return maxLength;
}

/*
Time Complexity: O(n)
- We iterate through the string once with the windowEnd pointer
- Each character is visited at most twice (once by windowEnd, once by windowStart)
- Map operations (get/set/has) are O(1)

Space Complexity: O(min(n, m))
- n is the length of the string
- m is the size of the character set (128 for ASCII, 256 for extended ASCII)
- In worst case, we store all unique characters in the map
*/
