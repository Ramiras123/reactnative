import { atom } from 'jotai';
import { authAtom } from '../../auth/model/auth.state';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { StudentCourseDescription } from './course.model';

export interface CourseState { 
	courses: StudentCourseDescription[];
	isLoading: boolean;
	error: string | null;
}

export const courseAtom = atom<CourseState>({
	courses: [], 
	isLoading: false, 
	error: null
})

export const loadCourseAtom = atom(
	async (get) => {
	return get(courseAtom)
},async(get, set) => {
	set(courseAtom, {
		isLoading: true,
		courses: [],
		error: null
	})
	try	 {
		const {access_token} = await get(authAtom);
		const { data } = await axios.get<StudentCourseDescription[]>(API.my ,{
			params: {
				studentCourse: 'dontMy'
			},
				headers: {
					
					Authorization: `Bearer ${access_token}`,
				},
			});
			set(courseAtom, {
				isLoading: false,
				courses: data,
				error: null
			})
	} catch (e) {
		if(e instanceof AxiosError ){ 
			set(courseAtom, {
				isLoading: false,
				courses: [],
				error: e.response?.data.message
			})
		}
	}
})

	