import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import TeamItem from '../item/TeamItem'

const { width: WINDOW_WIDTH } = Dimensions.get('window')

export default function TeamList(props) {
  const { teamList } = props

  return (
    <ScrollView style={styles.container} horizontal>
      {teamList.map((team, idx) => (
        <TeamItem key={idx} team={team} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    flexDirection: 'row',
    marginTop: 80,
    marginBottom: 40,
  },
})
