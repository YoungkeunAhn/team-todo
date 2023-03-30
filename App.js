import dayjs from 'dayjs'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Agenda, CalendarList, LocaleConfig } from 'react-native-calendars'
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

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['월', '화', '수', '목', '금', '토', '일'],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
  today: '오늘',
}

LocaleConfig.defaultLocale = 'ko'

export default function App() {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).format('YYYY-MM-DD')
  ) // dayjs(new Date()).format('YYYY-MM-DD')

  useEffect(() => {
    console.log(LocaleConfig.locales)
  }, [])

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.day}>{day}</Text>
      </View> */}
      <TeamList teamList={teamList} />
      {/* <ScrollView
        style={styles.calendarCotainer}
        alwaysBounceHorizontal={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <CalendarList
          horizontal
          scrollEnabled
          current={selectedDate}
          onDayPress={(day) => {
            setSelectedDate(day.dateString)
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
        <Agenda />
      </ScrollView> */}

      <CalendarList
        horizontal
        scrollEnabled
        pagingEnabled
        current={selectedDate}
        onDayPress={(day) => {
          setSelectedDate(day.dateString)
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />

      <TodoList todoList={fakeTodo} />
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
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
  calendarCotainer: {
    height: 310,
  },
})
