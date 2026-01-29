import { SELECT_COURSE, DESELECT_COURSE } from '../actions/CourseActionTypes';

const INITIAL_STATE = {
	availableCourses: [
		{
			id: 1,
			code: 'ITI-721',
			name: 'Desarrollo de Aplicaciones para Dispositivos Móviles II',
			level: 7,
			credits: 3,
		},
		{
			id: 2,
			code: 'ITI-612',
			name: 'Programación Avanzada',
			level: 6,
			credits: 4,
		},
		{
			id: 3,
			code: 'ITI-523',
			name: 'Bases de Datos II',
			level: 5,
			credits: 3,
		},
		{
			id: 4,
			code: 'ITI-434',
			name: 'Redes de Computadoras',
			level: 4,
			credits: 3,
		},
		{
			id: 5,
			code: 'ITI-345',
			name: 'Ingeniería de Software',
			level: 3,
			credits: 4,
		},
	],
	selectedCourses: [],
};

const CourseReducer = (state = INITIAL_STATE, action) => {
	let newState;

	switch (action.type) {
		case SELECT_COURSE:
			const courseToSelect = action.payload;
			newState = {
				availableCourses: state.availableCourses.filter(
					course => course.id !== courseToSelect.id
				),
				selectedCourses: [...state.selectedCourses, courseToSelect],
			};
			return newState;

		case DESELECT_COURSE:
			const courseToDeselect = action.payload;
			newState = {
				availableCourses: [...state.availableCourses, courseToDeselect],
				selectedCourses: state.selectedCourses.filter(
					course => course.id !== courseToDeselect.id
				),
			};
			return newState;

		default:
			return state;
	}
};

export default CourseReducer;