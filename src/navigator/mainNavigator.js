import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile171329Navigator from '../features/UserProfile171329/navigator';
import Maps171310Navigator from '../features/Maps171310/navigator';
import Settings171288Navigator from '../features/Settings171288/navigator';
import Settings171273Navigator from '../features/Settings171273/navigator';
import NotificationList171272Navigator from '../features/NotificationList171272/navigator';
import Maps171271Navigator from '../features/Maps171271/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile171329: { screen: UserProfile171329Navigator },
Maps171310: { screen: Maps171310Navigator },
Settings171288: { screen: Settings171288Navigator },
Settings171273: { screen: Settings171273Navigator },
NotificationList171272: { screen: NotificationList171272Navigator },
Maps171271: { screen: Maps171271Navigator },

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
