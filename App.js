import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const App=()=>{
  const [data,setData]=useState(undefined);
  const getApiData=async()=>{
    // console.warn("hello");
    const url="https://jsonplaceholder.typicode.com/posts/1";
    let result =await fetch(url);
    result=await result.json();
    // console.warn(result);
    setData(result)
  }
  useEffect(()=>{
    getApiData();

  },[])




  return(<View>
    <Text style={{fontSize:30}}>API call</Text>
    {
      data? <View>
        <Text style={{fontSize:30}}>{data.id}</Text>
        <Text style={{fontSize:30}}>{data.userId}</Text>
        <Text style={{fontSize:30}}>{data.title}</Text>
        <Text style={{fontSize:30}}>{data.body}</Text>
      </View>:null
    }
  </View>)

};
export default App;