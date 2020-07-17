import destCity from './index';

describe('destCity',()=>{
  test('A',()=>{
    expect(destCity([["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]])).toBe('Sao Paulo')
  })

  test('B',()=>{
    expect(destCity([["B", "C"], ["D", "B"], ["C", "A"]])).toBe('A')
  })

  test('C',()=>{
    expect(destCity([["jMgaf WaWA", "iinynVdmBz"], [" QCrEFBcAw", "wRPRHznLWS"], ["iinynVdmBz", "OoLjlLFzjz"], ["OoLjlLFzjz", " QCrEFBcAw"], ["IhxjNbDeXk", "jMgaf WaWA"], ["jmuAYy vgz", "IhxjNbDeXk"]])).toBe("wRPRHznLWS")
  })
})