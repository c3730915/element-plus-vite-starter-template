
calcDayDiff('2023-04-17')
function calcDayDiff(day:String) :number{
    const designatedDate: Date = new Date(day); // create a new Date object for the designated date
    const currentDate: Date = new Date(); // create a new Date object for the current date

// calculate the number of milliseconds between the two dates
    const timeDiff: number =  currentDate.getTime() - designatedDate.getTime();

// convert milliseconds to days and round down to the nearest integer
    const daysDiff: number = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
}

export {calcDayDiff}
