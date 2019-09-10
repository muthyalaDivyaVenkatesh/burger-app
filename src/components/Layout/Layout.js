import React from 'react';


import Aux from '../../hoc/Aux';
import classes from './Layout.css'


// here we are using Layout 
const layout = (props) =>(
    <Aux>
    <div>Toolbar, SideBar, BAckdrop</div>
    <main className={classes.Content}>
        {props.childern}
    </main>
    </Aux>    
)

// we are exporting default
export  default layout;