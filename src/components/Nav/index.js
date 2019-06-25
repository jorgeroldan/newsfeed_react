import React, {Component} from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom'
import { categoriesId } from '../../utils/constants'

const categoriesNames = Object.keys(categoriesId)

class Nav extends Component {
    state = {
        value: 0, 
    }
    
    handleNavigate = (index) => {
        this.setState({value: index})
        
        const { history } = this.props

        const category = categoriesNames[index]
        history.push(category === 'home' ? '/' : `/categorias/${category}`)
       
    }

    render () {
        const { value } = this.state
     
        return (
            <Tabs
              value={value}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              onChange={(_event,index) => this.handleNavigate(index)}
            >
              {categoriesNames.map(category => (
                  <Tab key={category} label={category} />
              ))}
            </Tabs>
        )

    }

}

export default withRouter(Nav) 