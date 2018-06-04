import { connect } from 'react-redux'
import CogButton from '../components/CogButton'
import { showMenu } from '../actions'

const mapStateToProps = (state, props) => ({
  visible: 1,
  menu_type: props.menu_type,
  workshop_id: props.workshop_id
})

const mapDispatchToProps = {
  onClick: showMenu
}

const MenuButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CogButton)

export default MenuButton
