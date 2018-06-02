import { connect } from 'react-redux'
import List from '../components/List'
import { chooseArea } from '../actions'

function getUniqueAreaArray (skills_array) {

  let unique_area_array=[];
  let filter_array=[];
  skills_array.forEach( function (item) {

    if( filter_array.indexOf(item.area) === -1 ) {
      filter_array.push(item.area);
      unique_area_array.push(item);
    }
  });

  return unique_area_array;
}

const mapStateToProps = (state) => ({
  visible: state.choice.show_list === 'SHOW_AREA',
  items: getUniqueAreaArray(state.skills_array.filter(() => state.choice.attendee.name!==undefined )).map( (skill) => ({
      key: skill.id,
      title: skill.area,
      subtitle: [],
      area: skill.area
  }))
})

const mapDispatchToProps = {
  onClick: chooseArea
}

const AreaList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default AreaList
