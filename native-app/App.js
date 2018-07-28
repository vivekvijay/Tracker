import React from 'react';
import { ScrollView, View, Text, StyleSheet, YellowBox, Dimensions } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import WellInfo from './components/WellInfo';
const SECTIONS = [
  {
    title: 'First',
    tab: 1,
    content: 'Lorem ipsum...'
  },
  {
    title: 'Second',
    tab: 2,
    content: 'Lorem ipsum...'
  },
  {
    title: 'Third',
    tab: 3,
    content: 'Lorem ipsum...'
  }
];

export default class App extends React.Component {
  _renderSectionTitle(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _renderHeader(section) {
    let view;
    let headerStyle = {
      height: 50,
      flexDirection: 'row'
    };
    const titleText = {
      marginTop: 15,
      fontSize: 16,
      fontWeight: 'bold'
    };
    switch (section.tab) {
      case 1:
        headerStyle.backgroundColor = '#9cfce2';
        view = <View style={headerStyle}>
          <View style={styles.title}>
            <Text style={titleText}>WELL INFO</Text>
          </View>
          <View style={styles.title}>
            <Text style={titleText}>STAGE INFO</Text>
          </View>
        </View>;
        break;
      case 2:
        headerStyle.backgroundColor = '#cdfdef';
        view = <View style={headerStyle}>
          <View style={styles.title}>
            <Text style={titleText}>MATERIAL</Text>
          </View>
          <View style={styles.title}>
            <Text style={titleText}>STORAGE</Text>
          </View>
        </View>;
        break;
      case 3:
        headerStyle.backgroundColor = '#ededed';
        view = <View style={headerStyle}>
          <View style={styles.title}>
            <Text style={titleText}>STOP WATCH</Text>
          </View>
        </View>;
        break;
    }


    return (view);
  }

  _renderContent(section) {
    let view;
    const window = Dimensions.get('window'),
      windowWidth = window.width,
      windowHeight = window.height;

    switch (section.tab) {
      case 1:
        view = <View style={styles.content}>
          <View style={styles.leftBlock}>
            <WellInfo />
          </View>
          <View style={styles.rightBlock}>
          </View>
        </View>
        break;
      case 2:
        view = <View style={styles.content}>
          <View style={styles.leftBlock}>
            <View></View>
          </View>
          <View style={styles.rightBlock}>
            <View></View>
          </View>
        </View>
        break;
      case 3:
        view = <View style={{ flex: 1, flexDirection: 'row', height: windowHeight - 175, }}>
          {/* <ScrollView pagingEnabled={true} horizontal={true} style={{ flex: 1, backgroundColor: 'yellow' }} >
            <View style={{ width: windowWidth / 2, backgroundColor: 'red' }} ></View>
            <View style={{ width: windowWidth / 2 }}></View>
          </ScrollView>
          <ScrollView pagingEnabled={true} horizontal={true} style={{ flex: 1, backgroundColor: 'green' }} >
            <View style={{ width: windowWidth / 2, backgroundColor: 'blue' }} ></View>
            <View style={{ width: windowWidth / 2 }}></View>
          </ScrollView> */}
        </View>
        break;
    }

    return (view);
  }

  render() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
    return (
      <Accordion
        sections={SECTIONS}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}


const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    width: '100%',
    height: Dimensions.get('window').height - 175,
    flex: 1,
    flexDirection: 'row'
  },
  header: {
    height: 50
  },
  title: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    color: 'black'
  },
  leftBlock: {
    backgroundColor: '#fff',
    width: '50%',
    height: '100%'
  },
  rightBlock: {
    backgroundColor: '#3fffca',
    width: '50%',
    padding: '2%',
    height: '100%'
  }
});