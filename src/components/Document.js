import React from 'react'
import TitleNavBar from './TitleNavBar'

const Document = ({match}) => (
  <div>
    <TitleNavBar title='DOKUMENT' />
    <div className="container">
      {match.params.workshop_id}
      {match.params.document_id}
    </div>
  </div>
)

export default Document
