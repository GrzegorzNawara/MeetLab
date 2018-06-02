import attendees from './attendees'

describe('attendee reducer', () => {
  it('should handle initial state', () => {
    expect(
      attendees(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_ATTENDEE', () => {
    expect(
      attendees([], {
        type: 'ADD_ATTENDEE',
        name: 'John Doe',
        id: 'user1234567'
      })
    ).toEqual([
      {
        name: 'John Doe',
        id: 'user1234567'
      }
    ])

    expect(
      attendees([
        {
          name: 'John Existing1',
          id: 'user1'
        }, {
          name: 'John Existing2',
          id: 'user2'
        }
      ], {
        type: 'ADD_ATTENDEE',
        name: 'John New',
        id: 'user3'
      })
    ).toEqual([
      {
        name: 'John Existing1',
        id: 'user1'
      }, {
        name: 'John Existing2',
        id: 'user2'
      }, {
        name: 'John New',
        id: 'user3'
      }
    ])
  })
})
