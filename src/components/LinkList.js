import React from 'react'
import { Route, Link, HashRouter } from 'react-router-dom';
import ListItem from './ListItem'
import debug from '../include/debug'

const LinkList = ({visible=true, items, onClick}) => (
  <div className="row mx-2">
    {visible && items.map( item =>
      <Link to={item.return}>
        <ListItem
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          onClick={() => onClick(item.return)}
        />
      </Link>
    )}
  </div>
)

export default LinkList
