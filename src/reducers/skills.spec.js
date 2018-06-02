import skills from './skills'

describe('skill reducer hahaha', () => {
  it('should handle initial state', () => {
    expect(
      skills (undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_SKILL', () => {
    expect(
      skills([], {
        type: 'ADD_SKILL',
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      })
    ).toEqual([
      {
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      }
    ])

    expect(
      skills([
        {
          area: 'Współpraca',
          id: 'analiza-sytuacji-1',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar',
          level1: 'Dobrze rozwinięta umiejętność',
          level2: 'Warto stonować ten obszar'
        }, {
          area: 'Współpraca A',
          id: 'analiza-sytuacji-2',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar',
          level1: 'Dobrze rozwinięta umiejętność',
          level2: 'Warto stonować ten obszar'
        }
      ], {
        type: 'ADD_SKILL',
        area: 'Współpraca A',
        id: 'analiza-sytuacji-3',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      })
    ).toEqual([
      {
        area: 'Współpraca',
        id: 'analiza-sytuacji-1',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      }, {
        area: 'Współpraca A',
        id: 'analiza-sytuacji-2',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      }, {
        area: 'Współpraca A',
        id: 'analiza-sytuacji-3',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar',
        level1: 'Dobrze rozwinięta umiejętność',
        level2: 'Warto stonować ten obszar'
      }
    ])
  })
})
