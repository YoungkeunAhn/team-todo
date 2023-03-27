import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native'
const { width: WINDOW_WIDTH } = Dimensions.get('window')

export default function TodoItem(props) {
  const { todo } = props
  const { id, title, content, createdAt, finishedAt } = todo

  return (
    <View>
      <View style={styles.container}>
        <Text>{createdAt}</Text>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity>
            <Text style={styles.done}>완료</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    marginBottom: 20,
    shadowColor: '#eee',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 5,
    width: WINDOW_WIDTH - 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
    width: WINDOW_WIDTH - 80,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  content: {
    color: '#ccc',
  },
  done: {
    color: '#748ffc',
  },
})
