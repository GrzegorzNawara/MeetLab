import feedback from './feedback'

describe('feedback reducer', () => {
  it('should handle initial state', () => {
    expect(
      feedback (undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_FEEDBACK', () => {
    expect(
      feedback([], {
        type: 'ADD_FEEDBACK',
        attendee_id:'user665',
        skill_id:'analiza-sytuacji',
        level:1
      })
    ).toEqual([
      {
        attendee_id:'user665',
        skill_id:'analiza-sytuacji',
        level:1
      }
    ])
  })
})
