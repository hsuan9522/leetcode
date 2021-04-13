import numUniqueEmails from './index'

describe('numUniqueEmails', ()=>{
  test('A', ()=>{
    expect(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])).toBe(2);
  })
})