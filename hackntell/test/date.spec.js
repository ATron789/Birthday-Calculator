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
});
