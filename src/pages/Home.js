import React from 'react'
import Grid from '@material-ui/core/Grid'

import Cards from '../components/Cards'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

import api from '../utils/api'
import Skeleton from 'react-loading-skeleton';


api.latest()

class Home extends React.Component {
    state = {
        isLoading: false, 
        latestNews: [], 
        destacadas: [], 
        secundarias: [], 
        grillaRoll: []
    }
    
    async componentDidMount() {
        this.setState({isLoading: true})
        const latestNews = await api.latest()
        console.log('latestNews', latestNews)

        this.setState({ 
            destacadas: latestNews.slice(0,3), 
            secundarias: latestNews.slice(3,5), 
            grillaRoll: latestNews.slice(5,20), 
            isLoading: false})
    }

    render () {
        const { isLoading, secundarias, grillaRoll, destacadas } = this.state

        return (        
        
        <div style={{ marginTop: '10px' }}>
        
            <Grid container spacing={3}>
                <Slider data={destacadas} />
            </Grid>
            
            <Grid container spacing={3}>

                {isLoading &&       
                    Array.from({ length: 2}, (_, index) => (
                        <Grid item xs={12} sm={6} key={index} >
                            <Skeleton width={440} height={334} />
                        </Grid>
                        ))}

                {secundarias.length > 0 && 
                    secundarias.map(secundariaNew => (
                        <Grid item xs={12} sm={6} key={secundariaNew.news_id} >
                            <Cards data={secundariaNew} />
                        </Grid>
                ))}

            </Grid>

            <Grid container spacing={3}>
                {isLoading &&       
                    Array.from({ length: 10}, (_, index) => (
                        <Grid item xs={4} key={index} >
                            <Skeleton width={282} height={337} />
                        </Grid>
                        ))}

                {grillaRoll.length > 0 && 
                    grillaRoll.map(rollNew => (
                        <Grid item xs={4} key={rollNew.news_id} >
                            <Cards data={rollNew} />
                        </Grid>
                ))}
            </Grid>
            <Footer />
        </div>
        )
    }
}

export default Home 