import React from 'react'
import {ScrollView, View, StyleSheet} from 'react-native'
import {DrawerNavigator, DrawerItems} from 'react-navigation'
import Home from './../screens/home/home'
import Settings from './../screens/settings/settings'
import About from './../screens/about/about'
import Accounts from './../screens/accounts/accounts'
import SendTo from './../screens/transfer/sendTo'
import Receive from './../screens/receive/receive'
import Logout from './../screens/auth/logout'
import DrawerHeader from './../components/drawerHeader'
import GetVerified from './../screens/settings/getVerified/getVerified2'
import Colors from './../config/colors'
import Currencies from './../screens/accounts/accountsB'

const RouteConfigs = {
    Home: {
        screen: Home,
    },
    Send: {
        screen: SendTo,
    },
    Receive: {
        screen: Receive,
    },
    Accounts: {
        screen: Accounts,
    },
    GetVerified: {
        screen: GetVerified,
    },
    Settings: {
        screen: Settings,
    },
    About: {
        screen: About,
    },
    Logout: {
        screen: Logout,
    },
}

export default DrawerNavigator(RouteConfigs, {

    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerToggleRoute:'DrawerToggle',
    contentComponent: (props) => (
        <View style={styles.container}>
            <DrawerHeader navigation={props.navigation}/>
            <ScrollView>
                <DrawerItems
                    {...props}
                    activeTintColor="#01C68B"
                    activeBackgroundColor="#485159"
                    inactiveTintColor="white"
                    inactiveBackgroundColor="transparent"
                    labelStyle={{margin: 15, alignItems: 'center', fontSize: 16, fontWeight: 'normal'}}
                />
            </ScrollView>
        </View>
    ),
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.drawerColor,
    },
})
