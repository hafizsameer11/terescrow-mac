import React from 'react'
import { Text, View } from 'react-native'

function Sidebar() {
  return (
   <View>
    <Text style={styles.text}>

    Hello Wolrd
    </Text>
   </View>
  )
}

const styles = {
text:{
  color: 'black',
  fontSize: 30
}
}
export default Sidebar
