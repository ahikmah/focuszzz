import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return <Text style={styles.title}>We haven&apos;t focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>⏳ {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we&apos;ve focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});

export default FocusHistory;
