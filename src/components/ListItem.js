import React from 'react'
import debug from '../include/debug'

const ListItem = ({ title, subtitle, onClick}) => (
  <div className="col-12 rounded bg-warning px-3 py-3 my-2 justify-content-right align-items-center"
    onClick={e => {
        e.stopPropagation(); // preserve click outside for modal
        onClick();
      }}>
    <h4>{title}</h4>
    <div className=''>{
      debug(subtitle,
        'subtitle should be an array of texts to show',
        typeof subtitle === 'object'
      ).map( (subtitle_item) =>
         <div key={title+subtitle_item}>
           {subtitle_item}
         </div>
      )
    }</div>
  </div>
)

export default ListItem
