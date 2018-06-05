import { connect } from 'react-redux'
import List from '../components/List'
import { runCmd } from '../actions'
//import debug from '../include/debug'

const mapStateToProps = (state) => ({
  visible: (state.show_menu && (state.menu_choosen!=='' || state.my_menu.length===1)),
  items: state.menu
    .filter((item) => item.menu_type===state.menu_type)
    .filter((item) => (item.mtitle===state.menu_choosen || state.my_menu.length===1))
    .map( (item, id) => ({
      key: id,
      title: item.title,
      subtitle: [item.subtitle],
      return: {cmd:item.cmd, params:item}
  }))
})

const mapDispatchToProps = {
  onClick: runCmd
}

const CmdList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default CmdList
