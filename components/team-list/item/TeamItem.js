import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function TeamItem(props) {
  const { team } = props
  const { id, name, thumbnail, todoLength } = team

  return (
    <View style={styles.container}>
      {todoLength > 0 && <Text style={styles.alaram}>{todoLength}</Text>}

      <TouchableOpacity style={styles.round}>
        <Text style={styles.textThumbnail}>{name}</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    width: 80,
    height: 80,
    paddingTop: 10,
  },
  round: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textThumbnail: {
    fontWeight: 'bold',
  },
  alaram: {
    borderRadius: 100,
    backgroundColor: 'tomato',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 0,
    top: 0,

    width: 30,
    height: 30,
    fontSize: 10,
    paddingVertical: 8,
    zIndex: 10,
  },
})
