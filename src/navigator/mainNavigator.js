import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList139948Navigator from '../features/NotificationList139948/navigator';
import Settings139947Navigator from '../features/Settings139947/navigator';
import Settings139939Navigator from '../features/Settings139939/navigator';
import UserProfile139937Navigator from '../features/UserProfile139937/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList139948: { screen: NotificationList139948Navigator },
Settings139947: { screen: Settings139947Navigator },
Settings139939: { screen: Settings139939Navigator },
UserProfile139937: { screen: UserProfile139937Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
