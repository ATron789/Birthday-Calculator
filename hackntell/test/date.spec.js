const expect = require('chai').expect;
const date = require('../lib/date');

describe('Date methods',function() {
  describe('BirthdayCalc',function() {
    it('today is the Bday, returns Porco Dio', function() {
      expect(date.birthdayCalc('1989/12/13')).to.equal('Porco DIO');
    });
    it('today is not the birthday', function() {
      expect(date.birthdayCalc('1989/12/12')).to.equal(undefined);
    });
  });

  describe('monthDiff', function() {
    const bdayDate = new Date('1989/07/09');
    it('Bday Month  < Current Month. BdayDay < TodayDay. Bday next year. Months difference - 1', function() {
      const today = new Date('2018/12/13')
      expect(date.monthDiff(bdayDate, today)).to.equal(6);
    });
    it('Bday Month  < Current Month.BdayDay > TodayDay. Bday next year', function() {
      const today = new Date('2018/12/08');
      expect(date.monthDiff(bdayDate,today)).to.equal(7);
    });
    it('Bday Month  > Current Month.BdayDay < TodayDay. Bday this year', function() {
      const today = new Date('2018/06/13');
      expect(date.monthDiff(bdayDate,today)).to.equal(0);
    });
    it('Bday Month  > Current Month.BdayDay > TodayDay. Bday this year', function() {
      const today = new Date('2018/06/07');
      expect(date.monthDiff(bdayDate,today)).to.equal(1);
    });
  });

  describe('leap year methods', function() {
    const january = new Date('1996/01/01')
    const march= new Date('1996/03/01')
    const january95 = new Date('1995/01/01')
    const march95= new Date('1995/03/01')

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
    let today = new Date('2018/12/13');
    it('bdayDay < todayDay, no leapYear, todayMonth <= Feb', function(){
      expect(date.dayDiff(bday,today)).to.equal(27);
    });
  });
  // not testing leapYear because it is a private method
});
