import { createStackNavigator } from 'react-navigation';

import PreRegistrationScreen1 from '../screens/onboarding/pre-registration1';

const OnboardingStack = createStackNavigator({
    PreRegistration1: PreRegistrationScreen1,
});

OnboardingStack.navigationOptions = {
    //?
};