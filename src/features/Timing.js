import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timinButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timinButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timinButton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timinButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Timing;
