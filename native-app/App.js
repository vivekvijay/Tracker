import React from 'react';
import { ScrollView, View, Text, StyleSheet, YellowBox, Dimensions } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import WellInfo from './components/WellInfo';
import Material from './components/Material';
import Storage from './components/Storage';
import { levels } from './data';

const window = Dimensions.get('window');
const windowHeight = window.height;

export default class App extends React.Component {
	getHeader(level) {
		return (
			<View style={[styles.panelHeader,{backgroundColor:level.content.backgroundColor}]} >
				{
					level.content.panels.map((panel,index)=>(
						<View key={index} style={styles.panelHeaderTitle}>
							<Text style={styles.panelHeaderTitleText}>{panel.title}</Text>
						</View>
					))
				}
			</View>
		);
	}
	getContent(level) {
		switch (level.tab) {
			case 1:
				return (
					<View style={styles.content}>
						<View style={styles.leftBlock}>
							<WellInfo />
						</View>
						<View style={styles.rightBlock}>
							<WellInfo />
						</View>
					</View>
				);
			case 2:
				return (
					<View style={styles.content}>
						<View style={styles.leftBlock}>
							<Material/>
						</View>
						<View style={styles.rightBlock}>
							<Storage/>
						</View>
					</View>
				);
			case 3:
				return (
					<View style={{ flex: 1, flexDirection: 'row', height: windowHeight - 175, }}></View>
				);
		}
	}
	render() {
		YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
		return (
			<Accordion sections={levels}
				// initiallyActiveSection={0}
				renderHeader={this.getHeader}
				renderContent={this.getContent}
			/>
		);
	}
}


const styles = StyleSheet.create({
	panelHeader:{
		height: 50,
		flexDirection: 'row'
	},
	panelHeaderTitle: {
		flex: 1,
		alignItems: 'center'
	},
	panelHeaderTitleText:{
		marginTop: 15,
		fontSize: 16,
		fontWeight: 'bold'
	},
	content: {
		backgroundColor: 'white',
		width: '100%',
		height: Dimensions.get('window').height - 175,
		flex: 1,
		flexDirection: 'row'
	},
	leftBlock: {
		backgroundColor: '#fff',
		width: '50%',
		height: '100%'
	},
	rightBlock: {
		backgroundColor: '#3fffca',
		width: '50%',
		height: '100%'
	}
});