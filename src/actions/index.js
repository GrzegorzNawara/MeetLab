import debug from '../include/debug'

export const addAttendee = (attendee) => ({
  type: 'ADD_ATTENDEE',
  id: (attendee.id === '') ? 'user_unknown' : attendee.id,
  name: attendee.name
})

export const addSkill = (skill) => ({
  type: 'ADD_SKILL',
  ...skill
})

export const addFeedback = (feedback) => ({
  type: 'ADD_FEEDBACK',
  ...debug(feedback,
    'wrong feedback',
    feedback.attendee_id.length>0 && feedback.skill_id.length>0
  )
})

export const chooseAttendee = (attendee='') => ({
  type: 'CHOOSE_ATTENDEE',
  ...attendee
})

export const chooseArea = (area='') => ({
  type: 'CHOOSE_AREA',
  ...area
})

export const chooseSkill = (skill='') => ({
  type: 'CHOOSE_SKILL',
  ...skill
})

export const chooseLevel = (level='') => ({
  type: 'CHOOSE_LEVEL',
  ...level
})

export const resetChoice = () => ({
  type: 'RESET_CHOICE'
})
