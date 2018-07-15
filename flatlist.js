import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';


let data = [
  {k: 'a'},
  {k: 'b'},
  {k: 'c'},
  {k: 'd'},
  {k: 'e'},
  {k: 'f'},
  {k: 'g'},
  {k: 'h'},
  {k: 'i'},
  {k: 'j'},
  {k: 'k'},
  {k: 'l'},
];

class MyComponent extends Component {
  constructor() {
    super();
    console.log('------------------------------');
    console.log('constructor');
    //console.log(this.props.text); //undefined
  }

  componentWillMount() {
    console.log('------------------------------');
    console.log('componentWillMount');
    console.log(this.props.text);
  }

  render() {
    console.log('------------------------------');
    console.log('render');
    console.log(this.props.text);

    return (
      <Text style = {styles.text} >{this.props.text}</Text>
    );
  }

  componentDidMount() {
    console.log('------------------------------');
    console.log('componentDidMount');
    console.log(this.props.text);
  }



  componentWillUnmount() {
    console.log('------------------------------');
    console.log('componentWillUnmount');
    console.log(this.props.text);
  }
}


export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <FlatList data = {data} renderItem = {
          ({item}) => <MyComponent text = {item.k} />
        }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 1)'
  },
  text: {
    height: 200,
    backgroundColor: 'rgba(0, 255, 0, 1)',
    padding: 30,
    margin: 50,
    borderWidth:50,
    borderColor:'rgba(0, 0, 255, 1)'
  }
});