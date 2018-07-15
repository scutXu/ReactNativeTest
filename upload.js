import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob'



export default class App extends Component {
  render() {

  let bundleDir = RNFetchBlob.fs.dirs.MainBundleDir
  console.log("bundleDir:" + bundleDir)
  RNFetchBlob.fs.ls(bundleDir).then((files) => {
    console.log(files)
  })
  let file0path = bundleDir + '/Resource0/0.jpg'

  RNFetchBlob.fetch('POST', 'http://localhost:3000',
                    {
                      'Content-Type' : 'multipart/form-data',
                    },
                    [
                      {
                        name: 'key0', filename: 'file0name.jpg', data: RNFetchBlob.wrap(file0path)
                      },
                      {
                        name: 'ke1', data: "this is text"                       
                      }
                    ])
              .then((resp) => {

              })
              .catch((err) => {

              })

    return (
      <View style={ styles.container }>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});