import React from 'react'
import Grid from '@material-ui/core/Grid'

import Cards from '../components/Cards'
// import Slider from '../components/Slider'

import api from '../utils/api'
import Skeleton from 'react-loading-skeleton';


api.latest()

class Home extends React.Component {
    state = {
        isLoading: false, 
        latestNews: []
    }
    
    async componentDidMount() {
        this.setState({isLoading: true})
        const latestNews = await api.latest()
        console.log('latestNews', latestNews)

        this.setState({ latestNews: latestNews.slice(0,10), isLoading: false})
    }

    render () {
        const { isLoading, latestNews } = this.state

        return (
        <div style={{ marginTop: '10px' }}>
        {/* <Slider /> */}
            <Grid container spacing={3}>
                {isLoading &&       
                    Array.from({ length: 10}, (_, index) => (
                        <Grid item xs={4} key={index} >
                            <Skeleton width={282} height={337} />
                        </Grid>
                        ))}

                {latestNews.length > 0 && 
                    latestNews.map(latestNew => (
                        <Grid item xs={4} key={latestNew.news_id} >
                            <Cards data={latestNew} />
                        </Grid>
                ))}
            </Grid>
        </div>
        )
    }
}

export default Home 