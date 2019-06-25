import React, {Component} from 'react'
import Container from '@material-ui/core/Container'

import Newsgrid from '../components/Newsgrid'
import Loading from '../components/Loading'
import Footer from '../components/Footer'


class Search extends Component {
  constructor (props){
    super(props)
    this.state = {
      news: [], 
      isloading: true
    }
  }

  async fetchCategoryNews(){
    const term = this.props.match.params.slug

    
      this.setState({
          isLoading:true
      })
    try {
        const response = await fetch(`https://api.canillitapp.com/search/${term}`);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ 
          news: json, 
          isLoading: false
        });
    } catch (error) {
        console.log(error);
    }
}

componentDidUpdate(prevProps) {
  if (prevProps.match.params.slug !== this.props.match.params.slug) {
    this.fetchCategoryNews()
  }
}

  async componentDidMount(){
    this.fetchCategoryNews()
  }

  render() {
    console.log(this.state.news)
    return (
      <React.Fragment >
        {this.state.isloading && <Loading /> }
        <Container>  
        {this.state.isloading && <Newsgrid news={this.state.news} /> }
        </Container>
        <Footer />
      </React.Fragment>
    )

  }
  
}

export default Search