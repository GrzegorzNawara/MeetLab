import React from 'react'
import ListItem from './ListItem'
import debug from '../include/debug'

const List = ({visible=true, items, onClick}) => (
  <div className="row mx-2">
    {visible && items.map( item =>
        <ListItem
          key={item.key}
          title={item.title}
          subtitle={debug(item.subtitle,
              'subtitle should be an array of texts',
              typeof item.subtitle === 'object'
            )}
          onClick={() => onClick(item)}
        />
    )}
  </div>
)

export default List
