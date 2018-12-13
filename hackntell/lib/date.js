module.exports = {
  birthdayCalc: function(bdayString) {
    const bdatDate = new Date(bdayString);
    const today = new Date();
    if(today.getDate() === bdatDate.getDate() && today.getMonth() === bdatDate.getMonth()) {
      return "Porco DIO";
    };
  },
  monthDiff: function(bday,today){
    const diffDay = bday.getDate() - today.getDate();
    let diffMonth = bday.getMonth() - today.getMonth();
    if (diffMonth < 0) diffMonth += 12;
    if (diffDay < 0) diffMonth -= 1;
    return diffMonth;
  }
};
// function birthdayCalc(bdayString) {
//   const bdatDate = new Date(bdayString);
//   const today = new Date();
//   if(today.getDate() === bdatDate.getDate() && today.getMonth() === bdatDate.getMonth()) {
//     return "Porco DIO";
//   }
// };
//
// function monthDiff(bday,today) {
  // const diffDay = bday.getDate() - today.getDate();
  // let diffMonth = bday.getMonth() - today.getMonth();
  // if (diffMonth < 0) diffMonth += 12;
  // if (diffDay < 0) diffMonth -= 1;
  // return diffMonth;
// };
//
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   }
//   return false;
// };
// function getDaysInMonth(today) {
//   let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (today.getMonth() <= 1) {
//     if (leapYear(today.getFullYear()) {
//       daysInMonths[1] = 29;
//     };
//   }
//   else {
//     if (leapYear(today.getFullYear() + 1) {
//       daysInMonths[1] = 29;
//     };
//   };
//   return daysInMonth;
// };
//
// function dayDiff(bday,today) {
//   const bdDay = bday.getDate();
//   const tDay = today.getDate();
//   let diffDay = bdDay - tDay;
//   if (diffDay >= 0) return diffDay;
//   let monthsYear =  getDaysInMonth(today);
//   const daysInMonth = monthsYear[today.getMonth()];
//   diffDay = daysInMonth + diffDay;
//   return diffDay;
// };
//
//
//
//
//
// console.log(aBday.getMonth()-today.getMonth());
//
// // module.exports = {birthdayCalc}
