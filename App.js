import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={{ backgroundColor: 'green', padding: 16 }}>
					<Text>Search</Text>
				</View>
				<View style={{ flex: 1, backgroundColor: 'blue', padding: 16 }}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style='auto' />
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
})
