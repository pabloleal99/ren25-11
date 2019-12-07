import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './../pages/Home';
import Details from './../pages/Details';
import Rendicion from './../pages/Rendicion';
import Login from './../pages/Login';

const AppNavigator = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            title:'Home'
        }

    },
    Details:{
        screen: Details,
        navigationOptions:{
            title:'Details'
        }
    },
    Rendicion:{
        screen: Rendicion,
        navigationOptions:{
            title:'Rendicion'
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            title:'Login'
        }
    }


})

export default Router = createAppContainer(AppNavigator);