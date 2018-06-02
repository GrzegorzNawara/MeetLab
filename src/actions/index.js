//import debug from '../include/debug'

export const addWorkshop = (workshop) => ({
  type: 'ADD_WORKSHOP',
  name: workshop.name
})

export const chooseWorkshop = (workshop) => ({
  type: 'SET_MY_WORKSHOP',
  my_workshop: workshop
})
