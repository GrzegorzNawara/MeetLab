import { connect } from 'react-redux'
import List from '../components/List'
import { chooseMenu } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.show_menu && state.menu_choosen==='' && state.my_menu.length>1),
  items: state.my_menu.map( (item, id) => ({
      key: id,
      title: item,
      subtitle: [],
      return: item
  }))
})

const mapDispatchToProps = {
  onClick: chooseMenu
}

const MenuList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default MenuList
