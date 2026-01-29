import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {style_matricula} from '../styles/style_matricula';
import {
	selectCourseAction,
	deselectCourseAction,
} from '../components/actions/CourseAction';

const CourseList = ({Courses}) => {
	const dispatch = useDispatch();

	const handleSelectCourse = course => {
		dispatch(selectCourseAction(course));
	};

	const handleDeselectCourse = course => {
		dispatch(deselectCourseAction(course));
	};

	const calculateTotalCredits = () => {
		return Courses.selectedCourses.reduce(
			(total, course) => total + course.credits,
			0
		);
	};

	const calculateTotalCost = () => {
		const totalCredits = calculateTotalCredits();
		return totalCredits * 12000;
	};

	const formatCurrency = amount => {
		return '₡' + amount.toLocaleString('es-CR');
	};

	return (
		<ScrollView style={style_matricula.container}>
			{/* Cursos Disponibles */}
			<Text style={style_matricula.sectionTitle}>
				Cursos Disponibles para Matricular
			</Text>
			{Courses.availableCourses.map(course => (
				<TouchableOpacity
					key={course.id}
					style={[
						style_matricula.courseItem,
						style_matricula.courseItemAvailable,
					]}
					onPress={() => handleSelectCourse(course)}>
					<Text style={style_matricula.courseCode}>{course.code}</Text>
					<Text style={style_matricula.courseName}>{course.name}</Text>
					<Text style={style_matricula.courseDetails}>
						Nivel: {course.level} | Créditos: {course.credits}
					</Text>
				</TouchableOpacity>
			))}

			{/* Cursos Seleccionados */}
			<Text style={style_matricula.sectionTitle}>Cursos a Matricular</Text>
			{Courses.selectedCourses.length === 0 ? (
				<Text style={{textAlign: 'center', margin: 20, color: '#666'}}>
					No hay cursos seleccionados
				</Text>
			) : (
				Courses.selectedCourses.map(course => (
					<TouchableOpacity
						key={course.id}
						style={[
							style_matricula.courseItem,
							style_matricula.courseItemSelected,
						]}
						onPress={() => handleDeselectCourse(course)}>
						<Text style={style_matricula.courseCode}>{course.code}</Text>
						<Text style={style_matricula.courseName}>{course.name}</Text>
						<Text style={style_matricula.courseDetails}>
							Nivel: {course.level} | Créditos: {course.credits}
						</Text>
					</TouchableOpacity>
				))
			)}

			{/* Resumen de Matrícula */}
			{Courses.selectedCourses.length > 0 && (
				<View style={style_matricula.summaryContainer}>
					<Text style={style_matricula.summaryText}>
						Total de Créditos:{' '}
						<Text style={style_matricula.summaryAmount}>
							{calculateTotalCredits()}
						</Text>
					</Text>
					<Text style={style_matricula.summaryText}>
						Costo de Matrícula:{' '}
						<Text style={style_matricula.summaryAmount}>
							{formatCurrency(calculateTotalCost())}
						</Text>
					</Text>
				</View>
			)}
		</ScrollView>
	);
};

const mapStateToProps = ({Courses}) => {
	return {Courses};
};

export default connect(mapStateToProps)(CourseList);