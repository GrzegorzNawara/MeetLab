import React from 'react'
import ListItem from './ListItem'
import debug from '../include/debug'

const List = ({visible=true, items, onClick}) => (
  <div className="row mx-2">
    {visible && items.map( item =>
        <ListItem
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => onClick(item.return)}
        />
    )}
  </div>
)

export default List
