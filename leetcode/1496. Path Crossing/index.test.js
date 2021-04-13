import isPathCrossing from './index';

describe('isPathCrossing',()=>{
  test('A',()=>{
    expect(isPathCrossing('NES')).toBe(false);
  })

  test('B',()=>{
    expect(isPathCrossing('NESWW')).toBe(true);
  })

  test('C',()=>{
    expect(isPathCrossing('NNSWWEWSSESSWENNW')).toBe(true);
  })
})