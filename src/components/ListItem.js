import React from 'react'
import debug from '../include/debug'

const ListItem = ({ title, subtitle, onClick}) => (
  <div className="w-100 rounded bg-warning px-3 py-3 my-2 align-items-center"
    onClick={e => {
        e.stopPropagation(); // preserve click outside for modal
        onClick();
      }}>
    <h4>{title}</h4>
    <div className=''>{
      subtitle.map( (subtitle_item) =>
         <div key={title+subtitle_item}>
           {subtitle_item}
         </div>
      )
    }</div>
  </div>
)

export default ListItem
