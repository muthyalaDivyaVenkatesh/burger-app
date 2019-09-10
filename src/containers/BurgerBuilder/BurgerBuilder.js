import React, {Component} from 'react';

// import Aux here
import Aux from '../../hoc/Aux'
// import Burger here 
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ...
    //     }
    // }

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:2
        }
    }

 // we are rendring here 
  render() {
      return (
          <Aux>
              <Burger ingredients = {this.state.ingredients}/>
               <div>
                   Build Container
               </div>
          </Aux>
      );
  }  
}

export default BurgerBuilder;