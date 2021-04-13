import replaceWords from './index';

describe('replaceWords',()=>{
  test('A', ()=>{
    expect(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"))
      .toBe("the cat was rat by the bat")
  })
})