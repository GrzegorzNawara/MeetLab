import React from 'react'
import debug from '../include/debug'

const EditItem = ({ workshop_id, title, subtitle, onSubmit}) => (
  <div className="w-100 rounded bg-warning px-3 py-3 my-2 align-items-center">
    <form onSubmit={e => {
        e.preventDefault();
        e.stopPropagation(); // preserve click outside for modal

        const form = e.target;
        const data = new FormData(form);
        onSubmit({workshop_id:workshop_id, title:form.elements['title'].value});
      }}>
    <input name='title' defaultValue={title} />
    <input className='button' type="submit" value="Save" />
    </form>
  </div>
)

export default EditItem
