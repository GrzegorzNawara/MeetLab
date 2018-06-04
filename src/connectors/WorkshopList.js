import { connect } from 'react-redux'
import LinkList from '../components/LinkList'
import { noAction } from '../actions'

const mapStateToProps = (state) => ({
  visible: 1,
  items: state.workshops.map( (item) => ({
      key: item.workshop_id,
      title: item.name,
      subtitle: [item.workshop_id],
      return: item.workshop_id
  }))
})

const mapDispatchToProps = {
  onClick: noAction
}

const WorkshopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList)

export default WorkshopList
