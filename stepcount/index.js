import { registerRootComponent } from 'expo';
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    webClientId: '217927509232-kua91c53n3glq515hphqll3k447cd490.apps.googleusercontent.com',
  });

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
