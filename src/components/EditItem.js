import React from 'react'
import debug from '../include/debug'

const EditItem = ({ visible, workshop_id, title, subtitle, onSubmit}) => { return ((visible)?(
  <div className="w-100 rounded bg-warning px-3 py-3 my-2 align-items-center">
    <form onSubmit={e => {
        e.preventDefault();
        e.stopPropagation(); // preserve click outside for modal

        const form = e.target;
        const data = new FormData(form);
        onSubmit({workshop_id:workshop_id, title:form.elements['title'].value, subtitle:form.elements['subtitle'].value});
      }}>
    <input className='form-control form-control-lg w-100 my-1' name='title' autoFocus placeholder={'Title'} />
    <input className='form-control form-control-sm w-100 my-1' name='subtitle' placeholder={'Subtitle'} />
    <input className='btn my-1 bg-success text-white mx-auto' type="submit" value="OK" />
    </form>
  </div>
):null)}

export default EditItem
