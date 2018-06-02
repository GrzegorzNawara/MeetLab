import choice from './choice'

describe('choice reducer', () => {
  it('should handle initial state', () => {
    expect(
      choice (undefined, {})
    ).toEqual({})
  })

  it('should handle CHOOSE_ATTENDEE - empty area', () => {
    expect(
      choice({attendee: {}, area: '', skill: {}, level: -1, show_list: 'SHOW_NONE'}, {
        type: 'CHOOSE_ATTENDEE',
        attendee: {id: 'user665', name:'John Doe #999'}
      })
    ).toEqual({
      attendee: {id: 'user665', name:'John Doe #999'},
      area: '',
      skill: {},
      level: -1,
      show_list: 'SHOW_AREA'
    })
  })

  it('should handle CHOOSE_ATTENDEE - non-empty area', () => {
    expect(
      choice({attendee: {}, area: 'Współpraca', skill: {}, level: -1, show_list: 'SHOW_NONE'}, {
        type: 'CHOOSE_ATTENDEE',
        attendee: {id: 'user665', name:'John Doe #999'}
      })
    ).toEqual({
      attendee: {id: 'user665', name:'John Doe #999'},
      area: 'Współpraca',
      skill: {},
      level: -1,
      show_list: 'SHOW_SKILL'
    })
  })

  it('should handle CHOOSE_AREA', () => {
    expect(
      choice({attendee: {id: 'user665', name:'John Doe #999'}, area: 'Współpraca', skill: {}, level: -1, show_list: 'SHOW_NONE'}, {
        type: 'CHOOSE_AREA',
        area: 'Przywództwo'
      })
    ).toEqual({
      attendee: {id: 'user665', name:'John Doe #999'},
      area: 'Przywództwo',
      skill: {},
      level: -1,
      show_list: 'SHOW_SKILL'
    })
    expect(
      choice({attendee: {}, area: 'Współpraca', skill: {}, level: -1, show_list: 'SHOW_NONE'}, {
        type: 'CHOOSE_AREA',
        area: 'Przywództwo'
      })
    ).toEqual({
      attendee: {},
      area: 'Przywództwo',
      skill: {},
      level: -1,
      show_list: 'SHOW_SKILL'
    })
  })

  it('should handle CHOOSE_SKILL', () => {
    expect(
      choice({attendee: {id: 'user665', name:'John Doe #999'}, area: 'Współpraca', skill: {}, level: -1, show_list: 'SHOW_NONE'}, {
        type: 'CHOOSE_SKILL',
        skill: {
          area: 'Współpraca',
          id: 'analiza-sytuacji',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
          level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
          level2: 'Warto stonować ten obszar. Analiza sytuacji'
        }
      })
    ).toEqual({
      attendee: {id: 'user665', name:'John Doe #999'},
      area: 'Współpraca',
      skill: {
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
        level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
        level2: 'Warto stonować ten obszar. Analiza sytuacji'
      },
      level: -1,
      show_list: 'SHOW_LEVEL'
    })
  })

  it('should handle ADD_FEEDBACK', () => {
    expect(
      choice({
        attendee: {
          id: 'user665',
          name:'John Doe #999'
        },
        area: 'Współpraca',
        skill: {
          area: 'Współpraca',
          id: 'analiza-sytuacji',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
          level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
          level2: 'Warto stonować ten obszar. Analiza sytuacji'
        },
        level: -1,
        show_list: 'SHOW_LEVEL'
      }, {
        type: 'ADD_FEEDBACK',
        level: 0
      })
    ).toEqual({
      attendee: {
        id: 'user665',
        name:'John Doe #999'
      },
      area: 'Współpraca',
      skill: {
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
        level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
        level2: 'Warto stonować ten obszar. Analiza sytuacji'
      },
      level: 0,
      show_list: 'SHOW_NONE'
    })
  })

  it('should handle ADD_FEEDBACK', () => {
    expect(
      choice({
        attendee: {
          id: 'user665',
          name:'John Doe #999'
        },
        area: 'Współpraca',
        skill: {
          area: 'Współpraca',
          id: 'analiza-sytuacji',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
          level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
          level2: 'Warto stonować ten obszar. Analiza sytuacji'
        },
        level: -1,
        show_list: 'SHOW_LEVEL'
      }, {
        type: 'ADD_FEEDBACK',
        level: 1
      })
    ).toEqual({
      attendee: {
        id: 'user665',
        name:'John Doe #999'
      },
      area: 'Współpraca',
      skill: {
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
        level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
        level2: 'Warto stonować ten obszar. Analiza sytuacji'
      },
      level: 1,
      show_list: 'SHOW_NONE'
    })
  })

  it('should handle ADD_FEEDBACK', () => {
    expect(
      choice({
        attendee: {
          id: 'user665',
          name:'John Doe #999'
        },
        area: 'Współpraca',
        skill: {
          area: 'Współpraca',
          id: 'analiza-sytuacji',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
          level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
          level2: 'Warto stonować ten obszar. Analiza sytuacji'
        },
        level: -1,
        show_list: 'SHOW_LEVEL'
      }, {
        type: 'ADD_FEEDBACK',
        level: 2
      })
    ).toEqual({
      attendee: {
        id: 'user665',
        name:'John Doe #999'
      },
      area: 'Współpraca',
      skill: {
        area: 'Współpraca',
        id: 'analiza-sytuacji',
        name: 'Analiza sytuacji',
        level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
        level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
        level2: 'Warto stonować ten obszar. Analiza sytuacji'
      },
      level: 2,
      show_list: 'SHOW_NONE'
    })
  })

  it('should handle RESET_CHOICE', () => {
    expect(
      choice({
        attendee: {
          id: 'user665',
          name:'John Doe #999'
        },
        area: 'Współpraca',
        skill: {
          area: 'Współpraca',
          id: 'analiza-sytuacji',
          name: 'Analiza sytuacji',
          level0: 'Warto rozwinąć ten obszar. Analiza sytuacji',
          level1: 'Dobrze rozwinięta umiejętność. Analiza sytuacji',
          level2: 'Warto stonować ten obszar. Analiza sytuacji'
        },
        level: -1,
        show_list: 'SHOW_LEVEL'
      }, {
        type: 'RESET_CHOICE'
      })
    ).toEqual({
      attendee: {},
      area: '',
      skill: {},
      level: -1,
      show_list: 'SHOW_NONE'
    })
  })

})
