import { SELECT_COURSE, DESELECT_COURSE } from './CourseActionTypes';

export const selectCourseAction = course => ({
	type: SELECT_COURSE,
	payload: course,
});

export const deselectCourseAction = course => ({
	type: DESELECT_COURSE,
	payload: course,
});