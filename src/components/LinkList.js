import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from './ListItem'

const LinkList = ({visible=true, items, onClick}) => (
  <div className="row mx-2">
    {visible && items.map( item =>
      <Link className="w-100" to={item.return} key={'link-'+item.key}>
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
