import React from 'react'
import marked from 'marked';
import TitleNavBar from './TitleNavBar'
import debug from '../include/debug'

class Document extends React.Component {
  constructor({match}) {
    super();
    this.state = {
      document_id: match.params.document_id,
      content: '' }
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  componentDidMount() {
    this.loadDocument(this.state.document_id).then(result => this.setState({
      content: result
    }))
  }

  loadDocument = (document) => {
      return fetch(debug('./documents/'+document+'.txt','FETCH'))
        .then(response => Promise.resolve(response))
        .then(response => response.text());
  }


  render = () => (
    <div>
      <TitleNavBar title='Document' />
      <div className='container'>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
      </div>
    </div> )
}

export default Document
