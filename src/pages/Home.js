import React from 'react'
import Grid from '@material-ui/core/Grid'

import Cards from '../components/Cards'
import api from '../utils/api'

api.latest()

class Home extends React.Component {
    state = {
        isLoading: false, 
        latestNews: []
    }
    
    async componentDidMount() {
        const latestNews = await api.latest()
        this.setState({ latestNews })
    }

    render () {
        const { isLoading, latestNews } = this.state

        

        return (
        <div>
            <Grid container spacing={3}>
                {latestNews.map(latestNew => (
                    <Grid item xs={4} key={latestNew.news_id} >
                        <Cards />
                    </Grid>
                ))}
            </Grid>
        </div>
        )
    }
}

export default Home 