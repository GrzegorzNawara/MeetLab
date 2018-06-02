import { connect } from 'react-redux'
import AdminButton from '../components/AdminButton'
import { addWorkshop } from '../actions'

const mapStateToProps = (state) => ({
  visible: 1
})

const mapDispatchToProps = {
  onClick: addWorkshop
}

const AddWorkshopButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminButton)

export default AddWorkshopButton
