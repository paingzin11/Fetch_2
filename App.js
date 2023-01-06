import React, {useCallback} from 'react';
import  {StyleSheet, View, Linking, Text}  from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';

export default function App() {
const iurl = 'https://www.aboutreact.com' ;

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert('Finally called');
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          alert('Both requests are now complete');
        }),
      );
  };

  const handlePress = useCallback(async () => {
    
    const supported = await Linking.canOpenURL(iurl);

    if (supported) {
      await Linking.openURL(iurl);
    } else {
      Alert.alert(`Don't know how to open this URL: ${iurl}`);
    }
  }, [iurl]);



  return (
    <View style={styles.container}>
      
    
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>

      <Button style={styles.buttonStyle} icon="loading" mode="contained" onPress={getDataUsingSimpleGetCall}>
          Simple Get Call
      </Button>
 
      <Button icon="loading" mode="contained"  style={styles.buttonStyle} onPress={getDataUsingAsyncAwaitGetCall}>
          Get Data Using Async Await GET
      </Button>
 
      <Button icon="loading" mode="contained"  style={styles.buttonStyle} onPress={postDataUsingSimplePostCall}>
        Post Data Using POST
      </Button>
 
      <Button icon="loading" mode="contained"  style={styles.buttonStyle} onPress={multipleRequestsInSingleCall}>
        Multiple Concurrent Requests In Single Call
      </Button>
      
      <Button icon="loading" mode="contained"  style={styles.buttonStyle} onPress={handlePress} >
        www.aboutreact.com
      </Button>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    borderRadius: 20,
    width: '100%',
    marginTop: 16,
  },
});

