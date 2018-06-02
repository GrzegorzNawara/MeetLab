import { put, call, take } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import { addAttendee, addSkill, addFeedback } from '../actions'

export default function* loadDataSaga() {

  const response1 = yield call(apiFetchData,
      "http://abcportal.eu/growbook/api_read_attendees.php"
    )
  if (response1.error) {
    return yield put({ type: 'FETCH_ATTENDEES_ERROR', response1 })
  }
  const tmp_attendees = JSON.parse(response1);
  for(let ii=0; ii<tmp_attendees.length; ii++) {
    yield  put(addAttendee({
      id: tmp_attendees[ii].id,
      name: tmp_attendees[ii].name
    }))
  }

  const response2 = yield call(apiFetchData,
      "http://abcportal.eu/growbook/api_read_skills_tree.php"
    )
  if (response2.error) {
    return yield put({ type: 'FETCH_SKILLS_ERROR', response2 })
  }
  const tmp_skills = JSON.parse(response2);
  for(let ii=0; ii<tmp_skills.length; ii++) {
    yield  put(addSkill({
      area: tmp_skills[ii].area,
      id: tmp_skills[ii].id,
      name: tmp_skills[ii].name,
      level0: tmp_skills[ii].level0,
      level1: tmp_skills[ii].level1,
      level2: tmp_skills[ii].level2
    }))
  }

  const response3 = yield call(apiFetchData,
      "http://abcportal.eu/growbook/api_read_feedback.php"
    )
  if (response3.error) {
    return yield put({ type: 'FETCH_FEDBACK_ERROR', response3 })
  }
  const tmp_feedbacks = JSON.parse(response3);
  for(let ii=0; ii<tmp_feedbacks.length; ii++) {
    yield  put(addFeedback({
      attendee_id: tmp_feedbacks[ii].attendee_id,
      skill_id: tmp_feedbacks[ii].skill_id,
      level: tmp_feedbacks[ii].level
    }))
  }

  while (true) {
    const request = yield take('ADD_FEEDBACK')
    const response4 = yield call(apiFetchData,
        "http://abcportal.eu/growbook/api_save_feedback.php?"
        +"attendee_id="+request.attendee_id
        +"&level="+request.level
        +"&skill_id="+request.skill_id
      )
    if (response4.error) {
      return yield put({ type: 'SAVE_FEEDBACK_ERROR', response4 })
    }
  }
}
