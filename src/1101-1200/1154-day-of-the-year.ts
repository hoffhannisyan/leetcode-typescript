/*
1154. Day of the Year

Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

Example 1:

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

Example 2:

Input: date = "2019-02-10"
Output: 41

Constraints:
* date.length == 10
* date[4] == date[7] == '-', and all other date[i]'s are digits
* date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.
*/

export function dayOfYear(date: string): number {
  const [yearString, monthString, dayString] = date.split("-");
  const year = parseInt(yearString);
  const month = parseInt(monthString);
  const day = parseInt(dayString);

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (isLeapYear) {
    daysInMonth[1] = 29;
  }

  let dayOfYear = 0;
  for (let monthIndex = 0; monthIndex < month - 1; monthIndex++) {
    dayOfYear += daysInMonth[monthIndex];
  }
  dayOfYear += day;

  return dayOfYear;
}

/*
Time Complexity: O(1)
- Split operation is O(1) for fixed-length string
- Loop runs at most 11 times (constant)
- All other operations are O(1)

Space Complexity: O(1)
- Fixed-size array of 12 elements
- Constant number of variables
*/
