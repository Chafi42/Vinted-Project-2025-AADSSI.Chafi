import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const back = () => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <Ionicons name="arrow-back-outline" 
                  size={24}
                  onPress={goBack} 
                  color="black" 
                  style={styles.backIcon}
            />
    );
};

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 50,
        left: 30
    }
});

export default back;