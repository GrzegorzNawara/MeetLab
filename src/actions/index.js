//import debug from '../include/debug'

export const noAction = () => ({
  type: 'NO_ACTION'
})

export const showMenu = ({menu_type, workshop_id}) => ({
  type: 'SHOW_MENU',
  menu_type: menu_type,
  workshop_id: workshop_id
})

export const chooseMenu = (menu) => ({
  type: 'CHOOSE_MENU',
  menu: menu
})

export const runCmd = ({cmd,params}) => ({
  type: 'RUN_CMD',
  cmd: cmd,
  params: params
})

export const resetChoice = () => ({
  type: 'RESET_CHOICE'
})

export const addWorkshop = (workshop) => ({
  type: 'ADD_WORKSHOP',
  title: workshop.title
})

export const changeWorkshopTitle = ({workshop_id, title}) => ({
  type: 'CHANGE_WORKSHOP_TITLE',
  workshop_id: workshop_id,
  title: title
})

export const chooseWorkshop = (workshop_id) => ({
  type: 'CHOOSE_WORKSHOP',
  workshop_id: workshop_id
})

export const chooseBrick = (brick_id) => ({
  type: 'CHOOSE_BRICK',
  workshop_id: brick_id
})
