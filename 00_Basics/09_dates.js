// let myDate = new Date()
// console.log(myDate); // 2024-06-23T10:58:54.432Z
// console.log(myDate.toString()); // Sun Jun 23 2024 10:58:54 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Jun 23 2024
// console.log(myDate.toLocaleString()); // 6/23/2024, 10:58:54 AM
// console.log(myDate.toISOString()); // 2024-06-23T11:08:24.883Z
// console.log(myDate.toJSON()) // 2024-06-23T11:08:24.883Z
// console.log(typeof myDate); // object

/*
myDate.toString()
Description: Converts the Date object to a string representing the date and time in a human-readable format.
Output: The full date and time, including the day of the week, month, day, year, time, and time zone.
Example Output: Sun Jun 23 2024 10:58:54 GMT+0000 (Coordinated Universal Time)

myDate.toDateString()
Description: Converts the Date object to a string representing the date portion only, in a human-readable format.
Output: The day of the week, month, day, and year.
Example Output: Sun Jun 23 2024

myDate.toLocaleString()
Description: Converts the Date object to a string according to the locale-specific conventions.
Output: The date and time formatted according to the local conventions (e.g., date format, time format, AM/PM).
Example Output: 6/23/2024, 10:58:54 AM (This output may vary based on your locale settings)

myDate.toISOString()
Description: Converts the Date object to a string in ISO 8601 format (a standard format for date and time).
Output: The date and time in a standardized, internationally recognized format.
Example Output: 2024-06-23T11:08:24.883Z (The Z indicates UTC time)

myDate.toJSON()
Description: Converts the Date object to a string in ISO 8601 format, suitable for JSON serialization.
Output: The date and time in the same ISO 8601 format as toISOString().
Example Output: 2024-06-23T11:08:24.883Z
The myDate.toJSON() method is used to convert a Date object into a JSON-compatible string. This method is particularly useful when you need to serialize date objects to JSON format, for example, when sending data to a server or saving data to a file.
*/


// IN JS DATE STARTS WITH 0, 0-JANUARY
// let d1 = new Date(2023, 0, 23)
// console.log(d1.toLocaleString()); // 1/23/2023, 12:00:00 AM

// let d2 = new Date(2023, 0, 23, 5, 3) 
// console.log(d2.toLocaleString()); // 1/23/2023, 5:03:00 AM

// // here month and starts with 1
// let d3 = new Date("2023-01-14")
// console.log(d3.toLocaleString()); // 1/14/2023, 12:00:00 AM

// let d4 = new Date("01-14-2023")
// console.log(d4.toLocaleString()); // 1/14/2023, 12:00:00 AM


// let myTimeStamp = Date.now() 
// let d5 = new Date(2023, 0, 23) 
// console.log(myTimeStamp); // 1719141619121 // give in millisecond from January 1, 1970, 00:00:00 UTC, which is known as the Unix Epoch
// console.log(d5.getTime()); // 1674432000000 // These values can be used to compare
// console.log(Math.floor(Date.now()/1000)); // To get the date in seconds

// let newDate = new Date()
// console.log(newDate); // 2024-06-23T11:20:19.124Z
// console.log(newDate.getMonth() + 1); // 6
// console.log(newDate.getDay()); // 0 // sunday

// const fullDateTime = newDate.toLocaleString('default', {  
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric"
// });

// console.log(fullDateTime); 
// // Example output: "Sunday, June 23, 2024, 10:58:54 AM"



// // Get the current time in seconds since the Unix Epoch
// const currentTimeInSeconds = Math.floor(Date.now() / 1000);
// console.log(`Current time in seconds: ${currentTimeInSeconds}`);


// // Get the current time in minutes since the Unix Epoch
// const currentTimeInMinutes = Math.floor(Date.now() / (1000 * 60));
// console.log(`Current time in minutes: ${currentTimeInMinutes}`);


// // Get the current time in hours since the Unix Epoch
// const currentTimeInHours = Math.floor(Date.now() / (1000 * 60 * 60));
// console.log(`Current time in hours: ${currentTimeInHours}`);


// // Get the current time in days since the Unix Epoch
// const currentTimeInDays = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
// console.log(`Current time in days: ${currentTimeInDays}`);


// // Get the time one hour ago in seconds since the Unix Epoch
// const oneHourAgoInSeconds = Math.floor((Date.now() - (1000 * 60 * 60)) / 1000);
// console.log(`Time one hour ago in seconds: ${oneHourAgoInSeconds}`);


// // Get the time one day from now in seconds since the Unix Epoch
// const oneDayFromNowInSeconds = Math.floor((Date.now() + (1000 * 60 * 60 * 24)) / 1000);
// console.log(`Time one day from now in seconds: ${oneDayFromNowInSeconds}`);


// // Convert a timestamp in seconds to a Date object
// const timeStampInSeconds = Math.floor(Date.now() / 1000);
// const dateFromTimeStamp = new Date(timeStampInSeconds * 1000);
// console.log(`Date from timestamp: ${dateFromTimeStamp}`);


// // Calculate the difference between two dates in seconds
// const date1 = new Date('2024-01-01').getTime();
// const date2 = new Date('2024-01-02').getTime();
// const differenceInSeconds = Math.floor((date2 - date1) / 1000);
// console.log(`Difference between two dates in seconds: ${differenceInSeconds}`);


// // Function to add days to the current date
// const addDays = (days) => {
//     return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
// };
// console.log(`Date 5 days from now: ${addDays(5)}`);


// // Function to subtract days from the current date
// const subtractDays = (days) => {
//     return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
// };
// console.log(`Date 5 days ago: ${subtractDays(5)}`);

