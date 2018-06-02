import React from 'react'
import AreaList from '../connectors/AreaList'
import SkillList from '../connectors/SkillList'
import LevelList from '../connectors/LevelList'
import debug from '../include/debug'

const Modal = ({ visible=true, title, onCloseClick }) => (
  (visible) ? (
    <div className="modal" onClick={
        debug(onCloseClick,'onCloseClick must be set', onCloseClick !== undefined)
      }>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="close">&times;</button>
          </div>

          <div className="modal-body">
            <div className="container">
              <AreaList />
              <SkillList />
              <LevelList />
            </div>
          </div>

        </div>
      </div>
    </div>
  ) : null
)

export default Modal
