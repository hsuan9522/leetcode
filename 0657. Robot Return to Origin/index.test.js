import judgeCircle from './index'

describe('judgeCircle',()=>{
  test('A',()=>{
    expect(judgeCircle("UD")).toEqual(true);
  })

  test('B', () => {
    expect(judgeCircle("LL")).toEqual(false);
  })
})