import { combineReducers } from 'redux'
import attendees from './attendees'
import skills from './skills'
import choice from './choice'
import feedback from './feedback'

const microfeedbackApp = combineReducers({
  attendees_array: attendees,
  skills_array: skills,
  feedbacks_array: feedback,
  choice: choice
})

export default microfeedbackApp
