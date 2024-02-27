// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,Button} from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const App = () => {
  const saveAPIData =async ()=>{
  const data = {id:9, text:"chala jaaa", postId:7}
  const url ="http://10.0.2.2:3000/comments";
  let result = await fetch(url,{
  method: "POST",
  headers: {
  "Content-Type":"application/json"
  },
  body: JSON.stringify(data)
  }); I
  result =await result.json();
  console.warn(result);
  }

  return(
        <View>
          <Text>post api with json server</Text>
          <Button title='save data' onPress={saveAPIData}/>
          
        </View>
      )
}

export default App;
// const App=()=>{
//   const[data,setData]=useState([]);
//   const getApiData=async()=>{
//     const url="http://10.0.2.2:3000/comments";
//     let result=await fetch(url);
//     result=await result.json();
//     setData(result);
    
//   }
//   useEffect(()=>{
// getApiData()
//   },[])
//   return(
//     <View>
//       <Text>Api with json</Text>
//       {
//         data.length ?
//         data.map((item)=><View> 
//         <Text>{item.id}</Text>
//         <Text>{item.text}</Text>
//         <Text>{item.postId}</Text></View>)
//         :null
//       }
//     </View>
//   )
// };
// export default App;


// const YourComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <View>
//       <Text>API Data:</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default YourComponent;
