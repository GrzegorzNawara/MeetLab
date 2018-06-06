import { connect } from 'react-redux'
import EditItem from '../components/EditItem'
import { changeWorkshopTitle } from '../actions'
import debug from '../include/debug'

const mapStateToProps = (state, props) => ({
  visible: (props.workshop_id!=='' && state.my_menu.length===0), 
  workshop_id: props.workshop_id,
  title: (props.workshop_id==='')?'':state.workshops.filter((workshop) => workshop.workshop_id===props.workshop_id)[0].title,
  subtitle: []
})

const mapDispatchToProps = {
  onSubmit: changeWorkshopTitle
}

const EditWorkshopTitle = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem)

export default EditWorkshopTitle
