import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { resetChoice } from '../actions'

const mapStateToProps = (state) => ({
  visible: state.show_menu,
  title: (state.menu_choosen!=='')?state.menu_choosen:'Menu',
  workshop_id: state.workshop_choosen
})

const mapDispatchToProps = {
  onCloseClick: resetChoice
}

const MenuModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)

export default MenuModal
