import React, {useState} from 'react';
import  {StyleSheet, View, SafeAreaView, Text}  from 'react-native';
import { WebView } from 'react-native-webview';


const MyWebview = () => {
    return(
        <SafeAreaView>
            <WebView
                source={{
                uri: 'https://github.com/facebook/react-native'
                }}
                style={{ marginTop: 20 }}
            />
      </SafeAreaView>
    );
};


export default MyWebview;