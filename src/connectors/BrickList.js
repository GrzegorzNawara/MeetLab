import { connect } from 'react-redux'
import List from '../components/List'
import { chooseBrick } from '../actions'
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
      return: item
  }))
})

const mapDispatchToProps = {
  onClick: chooseBrick
}

const BrickList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default BrickList
