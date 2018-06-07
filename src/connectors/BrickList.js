import { connect } from 'react-redux'
import LinkList from '../components/LinkList'
import { v4 } from 'uuid'
//import debug from '../include/debug'

const mapStateToProps = (state, props) => ({
  visible: 1,
  items: state.workshops
    .filter( (workshop) => (workshop.workshop_id===props.workshop_id))
    .reduce( (bricks,workshop) => { return workshop.bricks }, [] )
    .map( (item) => ({
      key: item.id,
      title: item.title,
      subtitle: [item.title],
      type: item.type,
      link: (item.link===undefined)?'':item.link.replace('GAMEID',v4()).replace('USERID',state.my_id),
      return: props.workshop_id+'/'+item.id
  }))
})

const mapDispatchToProps = {
}

const BrickList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList)

export default BrickList
