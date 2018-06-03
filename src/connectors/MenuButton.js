import { connect } from 'react-redux'
import CogButton from '../components/CogButton'
import { showMenu } from '../actions'

const mapStateToProps = (state) => ({
  visible: 1
})

const mapDispatchToProps = {
  onClick: showMenu
}

const MenuButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(CogButton)

export default MenuButton
