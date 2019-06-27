import React from 'react'
import Grid from '@material-ui/core/Grid'

import Cards from '../components/Cards'

import api from '../utils/api'
import Skeleton from 'react-loading-skeleton';
import {categoriesId} from '../utils/constants'


class Category extends React.Component {
    state = {
        isLoading: false, 
        categoriesNews: []
    }
    
    componentDidMount() {
        this.fetchCategoriesNews()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
          this.fetchCategoriesNews()
        }
    }
 
    async fetchCategoriesNews () {
        const { category } = this.props.match.params

        const categoryId = categoriesId[category]

        this.setState({isLoading: true})
        const categoriesNews = await api.category(categoryId)

        this.setState({ categoriesNews: categoriesNews.slice(0,10), isLoading: false})
    }


    render () {
        const { isLoading, categoriesNews } = this.state

        return (
        <div style={{ marginTop: '10px' }}>
            <Grid container spacing={3}>
                {isLoading &&       
                    Array.from({ length: 10}, (_, index) => (
                        <Grid item xs={4} key={index} >
                            <Skeleton width={282} height={337} />
                        </Grid>
                        ))}

                {categoriesNews.length > 0 && 
                    categoriesNews.map(latestNew => (
                        <Grid item xs={4} key={latestNew.news_id} >
                            <Cards data={latestNew} />
                        </Grid>
                ))}
            </Grid>
        </div>
        )
    }
}

export default Category 