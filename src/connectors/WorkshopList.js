import { connect } from 'react-redux'
import List from '../components/List'
import { chooseWorkshop } from '../actions'

const mapStateToProps = (state) => ({
  visible: 1,
  items: state.workshops.map( (item) => ({
      key: item.id,
      title: item.name,
      subtitle: [item.name],
      return: item
  }))
})

const mapDispatchToProps = {
  onClick: chooseWorkshop
}

const WorkshopList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default WorkshopList
