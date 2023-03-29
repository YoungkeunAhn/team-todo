import { StyleSheet, View } from 'react-native'
import TodoItem from '../item/TodoItem'

export default function TodoList(props) {
  const { todoList } = props
  return (
    <View style={styles.list}>
      {todoList.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    padding: 20,
    alignItems: 'flex-start',
  },
})
