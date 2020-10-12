import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings140120Navigator from '../features/Settings140120/navigator';
import SignIn2140118Navigator from '../features/SignIn2140118/navigator';
import UserProfile140049Navigator from '../features/UserProfile140049/navigator';
import Tutorial140048Navigator from '../features/Tutorial140048/navigator';
import NotificationList140020Navigator from '../features/NotificationList140020/navigator';
import Settings140019Navigator from '../features/Settings140019/navigator';
import Settings140011Navigator from '../features/Settings140011/navigator';
import UserProfile140009Navigator from '../features/UserProfile140009/navigator';
import UserProfile139977Navigator from '../features/UserProfile139977/navigator';
import Tutorial139976Navigator from '../features/Tutorial139976/navigator';
import NotificationList139948Navigator from '../features/NotificationList139948/navigator';
import Settings139947Navigator from '../features/Settings139947/navigator';
import Settings139939Navigator from '../features/Settings139939/navigator';
import UserProfile139937Navigator from '../features/UserProfile139937/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings140120: { screen: Settings140120Navigator },
SignIn2140118: { screen: SignIn2140118Navigator },
UserProfile140049: { screen: UserProfile140049Navigator },
Tutorial140048: { screen: Tutorial140048Navigator },
NotificationList140020: { screen: NotificationList140020Navigator },
Settings140019: { screen: Settings140019Navigator },
Settings140011: { screen: Settings140011Navigator },
UserProfile140009: { screen: UserProfile140009Navigator },
UserProfile139977: { screen: UserProfile139977Navigator },
Tutorial139976: { screen: Tutorial139976Navigator },
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
