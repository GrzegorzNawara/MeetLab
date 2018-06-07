import React from 'react'
import { Link } from 'react-router-dom';
import ListItem from './ListItem'
import debug from '../include/debug'

const LinkList = ({visible,items,type,link}) => (
  <div className="row mx-2">
    {visible && items.map( item => {
      if (debug(item.type,'GAME?')==='game') {
        return (
          <a className="w-100" href={item.link} key={'link-'+item.key}>
            <ListItem
              key={item.key}
              title={item.title}
              subtitle={item.subtitle}
              onClick={()=>{}}
            />
          </a>
    )}
    return (
      <Link className="w-100" to={item.return} key={'link-'+item.key}>
        <ListItem
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          onClick={()=>{}}
        />
      </Link>
)})}
  </div>
)

export default LinkList
