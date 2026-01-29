import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import CourseList from './src/views/CourseList';
import ConfigureStore from './src/components/Store';
import {style_matricula} from './src/styles/style_matricula';

const App = () => {
	const store = ConfigureStore();
	return (
		<Provider store={store}>
			<View style={style_matricula.container}>
				<View style={style_matricula.header}>
					<Text style={style_matricula.headerText}>
						Sistema de Matrícula
					</Text>
					<Text style={{color: '#FFF', marginTop: 5}}>
						Universidad Técnica Nacional
					</Text>
				</View>
				<CourseList />
			</View>
		</Provider>
	);
};

export default App;