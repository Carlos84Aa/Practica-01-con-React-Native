import {StyleSheet} from 'react-native';

const principal = '#1B2E66';
const naranja = '#FF9900';
const blanco = '#FFFFFF';
const celeste = '#ADD8E6';
const verdeClaro = '#90EE90';

export const style_matricula = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blanco,
	},
	header: {
		backgroundColor: principal,
		padding: 20,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: naranja,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: principal,
		margin: 10,
		marginTop: 20,
	},
	courseItem: {
		margin: 8,
		padding: 15,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: principal,
	},
	courseItemAvailable: {
		backgroundColor: celeste,
	},
	courseItemSelected: {
		backgroundColor: verdeClaro,
	},
	courseCode: {
		fontSize: 14,
		fontWeight: 'bold',
		color: principal,
	},
	courseName: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#000',
		marginTop: 5,
	},
	courseDetails: {
		fontSize: 14,
		color: '#333',
		marginTop: 5,
	},
	summaryContainer: {
		backgroundColor: principal,
		margin: 10,
		padding: 15,
		borderRadius: 10,
	},
	summaryText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: blanco,
		marginVertical: 5,
	},
	summaryAmount: {
		fontSize: 18,
		fontWeight: 'bold',
		color: naranja,
	},
});