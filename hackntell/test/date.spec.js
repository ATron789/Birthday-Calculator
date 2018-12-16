const expect = require('chai').expect;
const date = require('../lib/date');

describe('Date methods',function() {
  const january = new Date('1996/01/01')
  const march= new Date('1996/03/01')
  const january95 = new Date('1995/01/01')
  const march95= new Date('1995/03/01')

  describe('BirthdayCalc',function() {
    const today = new Date('2018/12/16');
    const name = 'Pippo'
    let birthday = new Date('1989/07/09');
    birthday.setMonth(today.getMonth());
    birthday.setDate(today.getDate());
    bday = birthday.toDateString();
    it('today is the Bday, returns Porco Dio', function() {
      expect(date.birthdayCalc(bday,name)).to.equal(`Happy Birthday ${name}!`);
    });
    it('today is not the birthday', function() {
      expect(date.birthdayCalc('1989/12/12',name)).to.equal(`Hello ${name}, your birthday is in 11 months and 27 days`);
    });
  });

  describe('monthDiff', function() {
    const bdayDate = new Date('1989/07/09');
    it('Bday Month  < Current Month. BdayDay < TodayDay. Bday next year. Months difference - 1', function() {
      const today = new Date('2018/12/16')
      expect(date.monthDiff(bdayDate, today)).to.equal(6);
    });
    it('Bday Month  < Current Month.BdayDay > TodayDay. Bday next year', function() {
      const today = new Date('2018/12/08');
      expect(date.monthDiff(bdayDate,today)).to.equal(7);
    });
    it('Bday Month  > Current Month. BdayDay < TodayDay. Bday this year', function() {
      const today = new Date('2018/06/13');
      expect(date.monthDiff(bdayDate,today)).to.equal(0);
    });
    it('Bday Month  > Current Month. BdayDay > TodayDay. Bday this year', function() {
      const today = new Date('2018/06/07');
      expect(date.monthDiff(bdayDate,today)).to.equal(1);
    });
    it('Bday Month  = Current Month.BdayDay > TodayDay. Bday this year', function() {
      const today = new Date('2018/07/07');
      expect(date.monthDiff(bdayDate,today)).to.equal(0);
    });
    it('Bday Month  = Current Month. BdayDay < TodayDay. Bday next year', function() {
      const today = new Date('2018/07/10');
      expect(date.monthDiff(bdayDate,today)).to.equal(11);
    });
  });

  describe('leap year methods', function() {

    it ('if leap year and today Month january', function(){
      expect(date.getDaysInMonth(january)[1]).to.equal(29);
    });
    it ('if leap year and today Month march', function(){
      expect(date.getDaysInMonth(march)[1]).to.equal(28);
    });
    it ('if next year leap year and today Month march', function(){
      expect(date.getDaysInMonth(march95)[1]).to.equal(29);
    });
    it ('if next year leap year and today Month January', function(){
      expect(date.getDaysInMonth(january95)[1]).to.equal(28);
    });
  });

  describe('days difference method', function() {
    let bday= new Date('1989/07/09');
    let todayMore = new Date('2018/12/13');
    let todayLess = new Date('2018/12/02');
    it('bdayDay > todayDay', function(){
      expect(date.dayDiff(bday,todayLess)).to.equal(7);
    });
    it('bdayDay < todayDay', function(){
      expect(date.dayDiff(bday,todayMore)).to.equal(27);
    });
    it('bdayDay < todayDay, current Month leapYear, todayMonth <= Feb', function(){
      todayMore.setFullYear('1996');
      todayMore.setMonth(1);
      expect(date.dayDiff(bday,todayMore)).to.equal(25);
    });
    it('bdayDay < todayDay, next leapYear, todayMonth > Feb', function(){
      todayMore.setFullYear('1995');
      todayMore.setMonth(3);
      expect(date.dayDiff(bday,todayMore)).to.equal(26);
    });
    it('bdayDay > todayDay, leapYear, todayMonth Jan bdayMonth Feb', function(){
      todayMore.setFullYear('1996');
      todayMore.setMonth(0);
      bday.setMonth(1);
      expect(date.dayDiff(bday,todayMore)).to.equal(27);
    });
  });
});
