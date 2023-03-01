import dayjs from 'dayjs'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ListItem from './components/list-item/ListItem'

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

export default function App() {
  const [day, setDay] = useState(dayjs(new Date()).format('YYYY-MM-DD'))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.day}>{day}</Text>
      </View>
      <View style={styles.list}>
        {fakeTodo.map((todo, idx) => (
          <ListItem key={idx} todo={todo} />
        ))}
        <StatusBar style='light' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
  list: {
    // backgroundColor: 'tomato',
    flex: 3,
    flexDirection: 'column',

    padding: 20,

    alignItems: 'flex-start',
  },
})
