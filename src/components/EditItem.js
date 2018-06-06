import React from 'react'
import debug from '../include/debug'

const EditItem = ({ visible, workshop_id, title, subtitle, onSubmit}) => { return ((visible)?(
  <div className="w-100 rounded bg-warning px-3 py-3 my-2 align-items-center">
    <form onSubmit={e => {
        e.preventDefault();
        e.stopPropagation(); // preserve click outside for modal

        const form = e.target;
        const data = new FormData(form);
        onSubmit({workshop_id:workshop_id, title:form.elements['title'].value});
      }}>
    <input className='btn w-100 my-1' name='title' autoFocus defaultValue={title} />
    <input className='btn my-1 bg-success text-white mx-auto' type="submit" value="OK" />
    </form>
  </div>
):null)}

export default EditItem
