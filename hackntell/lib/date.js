module.exports = {
  birthdayCalc: function(bdayString) {
    const bdatDate = new Date(bdayString);
    const today = new Date();
    if (today.getDate() === bdatDate.getDate() && today.getMonth() === bdatDate.getMonth()) {
      return "Porco DIO";
    };
  },

  monthDiff: function(bday, today) {
    const diffDay = bday.getDate() - today.getDate();
    let diffMonth = bday.getMonth() - today.getMonth();
    if (diffMonth < 0) diffMonth += 12;
    if (diffDay < 0) diffMonth -= 1;
    return diffMonth;
  },

  getDaysInMonth: function(today) {
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const thisYear = today.getFullYear();
    const nextYear = today.getFullYear() + 1;
    const currentMonth = today.getMonth();
    if (currentMonth <= 1 && leapYear(thisYear) ||
        currentMonth >1 && leapYear(nextYear)) {
      daysInMonths[1] = 29;
    };
    return daysInMonths;
  },

  dayDiff: function(bday,today) {
    const bdDay = bday.getDate();
    const tDay = today.getDate();
    let diffDay = bdDay - tDay;
    if (diffDay >= 0) return diffDay;
    let monthsYear =  this.getDaysInMonth(today);
    const daysInMonth = monthsYear[today.getMonth()];
    diffDay = daysInMonth + diffDay;
    return diffDay;
  }
};

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
};
// treating this as private method

function dayDiff(bday,today) {
  const bdDay = bday.getDate();
  const tDay = today.getDate();
  let diffDay = bdDay - tDay;
  if (diffDay >= 0) return diffDay;
  let monthsYear =  getDaysInMonth(today);
  const daysInMonth = monthsYear[today.getMonth()];
  diffDay = daysInMonth + diffDay;
  return diffDay;
};
//
//
//
//
//
// console.log(aBday.getMonth()-today.getMonth());
//
// // module.exports = {birthdayCalc}
