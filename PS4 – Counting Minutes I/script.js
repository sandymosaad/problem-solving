// ✅ PS4 – Counting Minutes I
// 🧩 Problem:
// Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (start time and end time) separated by a hyphen -.

// Time will be in the 12-hour clock format (e.g., 12:30pm), and your goal is to return the total number of minutes between the two times.

// Important notes:
// The times may span over midnight.

// The input will always be valid.

// Examples:
// Input: "9:00am-10:00am"
// Output: 60
// Input: "1:00pm-11:00am"
// Output: 1320

function convertToMinutes(timeStr) {
    let ampm = timeStr.slice(-2);
    let [hour, minute] = timeStr.slice(0, -2).split(':');
    hour = Number(hour);
    minute = Number(minute);

    if (ampm === 'am') {
        if (hour === 12) hour = 0; 
    } else {
        if (hour !== 12) hour += 12; 
    }

    return hour * 60 + minute;
}

function CountingMinutesI(str) {
    let [start, end] = str.split('-');

    let startMinutes = convertToMinutes(start);
    let endMinutes = convertToMinutes(end);

    let diff = endMinutes - startMinutes;

    if (diff < 0) {
        diff += 24 * 60; 
    }

    return diff;
}

console.log(CountingMinutesI("9:00am-10:00am")); // 60
console.log(CountingMinutesI("9:00am-10:00pm")); // 780
console.log(CountingMinutesI("9:00pm-10:00am")); // 780
console.log(CountingMinutesI("9:00pm-10:00pm")); // 60
console.log(CountingMinutesI("12:30pm-12:00am")); // 690
console.log(CountingMinutesI("12:00am-12:00pm")); // 720


