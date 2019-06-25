import React from 'react'
import Grid from '@material-ui/core/Grid'

import Cards from '../components/Cards'

import api from '../utils/api'
import Skeleton from 'react-loading-skeleton';


class Search extends React.Component {
    state = {
        isLoading: false, 
        newsSearched: []
    }
    
    componentDidMount() {
        this.fetchSearchNews()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchSearchNews()
        }
    }
 
    async fetchSearchNews () {
        const term = this.props.match.params.slug
        console.log('term', term)

        this.setState({isLoading: true})
        const newsSearched = await api.search(term)

        this.setState({ newsSearched: newsSearched.slice(0,10), isLoading: false})
    }


    render () {
        const { isLoading, newsSearched } = this.state

        return (
        <div style={{ marginTop: '10px' }}>
            <Grid container spacing={3}>
                {isLoading &&       
                    Array.from({ length: 10}, (_, index) => (
                        <Grid item xs={4} key={index} >
                            <Skeleton width={282} height={337} />
                        </Grid>
                        ))}

                {newsSearched.length > 0 && 
                    newsSearched.map(foundedNew => (
                        <Grid item xs={4} key={foundedNew.news_id} >
                            <Cards data={foundedNew} />
                        </Grid>
                ))}
            </Grid>
        </div>
        )
    }
}

export default Search 