import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import OnboardingTabNavigator from './OnboardingNavigator';
// import DashboardTabNAvigator from './DashboardNavigator'

const isLoggedIn = false; //fix later

const AppNavigator = createSwitchNavigator({
    Onboarding: OnboardingTabNavigator,
    // Dashboard: DashboardTabNAvigator,
}, {
    initialRouteName: isLoggedIn ? 'Dashboard' : 'Onboarding',
});


class RootNavigator extends React.Component {
    render() {
        return <AppNavigator />;
    }
}

export default RootNavigator;