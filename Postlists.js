import React, {Component} from 'react';
import PostData from '../data.json'
import {Card} from 'semantic-ui-react';
import SearchInput, {createFilter} from 'react-search-input'

const KEYS_TO_FILTERS = ['name']

class  Postlist extends Component {
  constructor(props){
    super(props);
      this.state = {
       // PostData : PostData,
        term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  


  render(){
    const filtered = PostData.filter(createFilter(this.state.term , KEYS_TO_FILTERS))
    return (
      <div className="Postlist">
       <SearchInput className="search-input" onChange={this.searchHandler}/>
       <React.Fragment>
        {filtered.map(playerdetail => {
          return (
             <div key={playerdetail.name}>
               <Card.Group itemsPerRow = {3}>
               <Card>
                 <Card.Content>
                   <Card.Header>
                     {playerdetail.name}
                   </Card.Header>
                   <Card.Description>{playerdetail.position}</Card.Description>
                 </Card.Content>
               </Card>
               </Card.Group>
               </div>
          )
          })}
          </React.Fragment>
      </div>
    );
      }
      searchHandler(terms){
        this.setState({term : terms})
      }
  }

export default Postlist;