import { createStackNavigator } from 'react-navigation';

import PreRegistrationScreen1 from '../screens/onboarding/pre-registration1';
import PreRegistrationScreen2 from '../screens/onboarding/pre-registration2';

const OnboardingStack = createStackNavigator({
    PreRegistration1: PreRegistrationScreen1,
    PreRegistration2: PreRegistrationScreen2,
});

OnboardingStack.navigationOptions = {
    tabBarLabel: 'bla'
};

export default OnboardingStack;