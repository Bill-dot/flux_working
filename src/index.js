import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import ScarletScreen from './ScarletScreen'
import GreySheet from './GreyScreen'
import BlueScreen from './BlueScreen'
import YellowScreen from './YellowScreen'
import BlackScreen from './BlackScreen'
import GreenScreen from './GreenScreen'


const TabIcon = ({ selected, title }) => {
    return (
      <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
  }
  

const Index = () => {
    return (
        <Router>
            <Scene title='root'>
                <Scene
                    key="tabbar"
                    tabs={true}
                    tabBarStyle={{ backgroundColor: '#FFFFFF' }}>

                    <Scene key="osu" title="OSU" icon={TabIcon}>

                        <Scene title='Scarlet'
                            component={ScarletScreen}
                            key='scarlet'
                            initial />

                        <Scene key='grey'
                            component={GreySheet}
                            title='Grey'
                        />
                    </Scene>
                    <Scene key="um" title="UM" icon={TabIcon}>

                        <Scene title='Blue'
                            component={BlueScreen}
                            key='blue'
                            initial />

                        <Scene key='yellow'
                            component={YellowScreen}
                            title='Yellow'
                        />
                    </Scene>
                    <Scene key="vu" title="VU" icon={TabIcon}>

                        <Scene title='Black'
                            component={BlackScreen}
                            key='black'
                            initial />

                        <Scene key='green'
                            component={GreenScreen}
                            title='Green'
                        />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    )
}

export default Index