//import debug from '../include/debug'

export const showMenu = () => ({
  type: 'SHOW_MENU'
})

export const chooseMenu = (menu) => ({
  type: 'CHOOSE_MENU',
  menu: menu
})

export const runCmd = (cmd) => ({
  type: 'RUN_CMD',
  cmd: cmd
})

export const resetChoice = () => ({
  type: 'RESET_CHOICE'
})

export const addWorkshop = (workshop) => ({
  type: 'ADD_WORKSHOP',
  name: workshop.name
})

export const chooseWorkshop = (workshop) => ({
  type: 'SET_MY_WORKSHOP',
  my_workshop: workshop
})
