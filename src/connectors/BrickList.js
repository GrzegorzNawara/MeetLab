import { connect } from 'react-redux'
import LinkList from '../components/LinkList'
import { noAction } from '../actions'
import debug from '../include/debug'

const mapStateToProps = (state, props) => ({
  visible: 1,
  items: state.workshops
    .filter( (workshop) => (workshop.workshop_id===props.workshop_id))
    .reduce( (bricks,workshop) => { return workshop.bricks }, [] )
    .map( (item) => ({
      key: item.id,
      title: item.name,
      subtitle: [item.name],
      return: props.workshop_id+'/'+item.id
  }))
})

const mapDispatchToProps = {
  onClick: noAction
}

const BrickList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList)

export default BrickList
