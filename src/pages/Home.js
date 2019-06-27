import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';


import Cards from '../components/Cards'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

import api from '../utils/api'
import Skeleton from 'react-loading-skeleton';


api.latest()

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'10px'
    },
    button: {
      margin: '30px auto 40px auto',
      display:'block'
  
    },
    input: {
      display: 'none',
    },
    loadEnd:{
      margin: '30px auto 40px auto',
      display:'block',
      fontFamily:'Roboto',
      textAlign:'center'
    },
  });

class Home extends React.Component {

    
    state = {
        isLoading: false, 
        latestNews: [], 
        destacadas: [], 
        secundarias: [], 
        grillaRoll: []
    }
    
    async componentDidMount() {
        this.fetchNews()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.path !== this.props.match.path) {
          this.fetchNews()
        }
    }
 
    async fetchNews () {
        this.setState({isLoading: true})
        const latestNews = await api.latest()

        this.setState({ 
            destacadas: latestNews.slice(0,3), 
            secundarias: latestNews.slice(3,5), 
            grillaRoll: latestNews.slice(5,20), 
            isLoading: false})
    }

    

    render () {
        const { isLoading, secundarias, grillaRoll, destacadas } = this.state
 
        console.log('destacada despues fetch', destacadas)
        console.log('secundarias despues fetch', secundarias)
        console.log('grillaRoll despues fetch', grillaRoll)

        // const [rollNumer,setrollNumer] = useState(13)
        // const [rollNumerMax] = useState(grillaRoll.length - 9)

        return (        
        
        <div style={{ marginTop: '20px' }}>
        
            <Grid container spacing={3}>
               { isLoading && <Slider data={destacadas} /> }
            </Grid>
            
            <Grid container spacing={3}>

                {isLoading &&       
                    Array.from({ length: 2}, (_, index) => (
                        <Grid item xs={12} sm={6} key={index} >
                            <Skeleton width={436} height={310} />
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
                            <Cards data={rollNew} max-width={100} />
                        </Grid>
                ))}
            </Grid>

            <Grid style={{ marginTop: '50px' }} container direction="row" justify="center" alignItems="center">

                    {!isLoading && <Button 
                        variant="contained" 
                        onClick={()=>console.log('cargar más')}
                        color="primary" 
                        >
                        Cargar más
                    </Button>}
    
            </Grid>


            <Footer />
        </div>
        )
    }
}

export default withStyles(styles)(Home)