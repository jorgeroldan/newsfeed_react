import React from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const categoriesId = {
    politica: '1', 
    internacionales: '2', 
    tecnologia: '3', 
    espectaculos: '4', 
    deportes: '5', 
}

const categoriesNames = Object.keys(categoriesId)

const Nav = () => {

    return (
        <Tabs
          value={0}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          onChange={(_,category) => console.log({ category })}
        >
          {categoriesNames.map(category => (
              <Tab key={category} label={category} />
          ))}
        </Tabs>
    )
}

export default Nav 