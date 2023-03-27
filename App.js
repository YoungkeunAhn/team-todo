import dayjs from 'dayjs'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TeamList from './components/team-list/list/TeamList'
import TodoList from './components/todo-list/list/TodoList'

const fakeTodo = [
  {
    id: '1',
    title: '메카스테이지 검색기능',
    content: '담당부서, 지급일, 사용일로 검색',
    finishedAt: '2023-02-25',
    createdAt: '2023-02-23',
  },
  {
    id: '2',
    title: '초이템 스타일 수정',
    content: '전체페이지',
    createdAt: '2023-02-26',
    finishedAt: '',
  },
]

const teamList = [
  {
    id: 'all',
    name: '전체',
    thumbnail: '',
    todoLength: 10,
  },
  {
    id: 'my',
    name: 'MY',
    thumbnail: '',
    todoLength: 3,
  },
  {
    id: 'study',
    name: '공부',
    thumbnail:
      'https://cdn.dribbble.com/userupload/3566469/file/original-535450994b24c5240fdce3cf476c1194.png?compress=1&resize=400x300&vertical=top',
    todoLength: 7,
  },
]

export default function App() {
  const [day, setDay] = useState(dayjs(new Date()).format('YYYY-MM-DD'))

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.day}>{day}</Text>
      </View> */}
      <TeamList teamList={teamList} />
      <TodoList todoList={fakeTodo} />

      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
    justifyContent: 'center',
  },
  day: {
    color: 'white',
    fontSize: 30,
    fontWeight: 600,
  },
  header: {
    color: 'white',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
})
