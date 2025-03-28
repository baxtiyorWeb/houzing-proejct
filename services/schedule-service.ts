/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/lib/axios';
import type { Property, PropertyFormData } from '@/types';

export const ScheduleService = {
	createSchedule: async (
		scheduleData: PropertyFormData | FormData
	): Promise<Property> => {
		try {
			const response = await api.post<Property>(
				'/uy/create_schedule/',
				scheduleData
			);
			return response.data;
		} catch (error) {
			console.error('Error creating schedule:', error);
			throw error;
		}
	},

	getAllSchedules: async (): Promise<Property[]> => {
		try {
			const response = await api.get<Property[]>('/uy/get_all_schedule/');

			// Check if response.data exists and is an array
			if (response && response.data) {
				return Array.isArray(response.data) ? response.data : [];
			}
			return [];
		} catch (error) {
			console.error('Error fetching schedules:', error);
			return []; // Return empty array on error
		}
	},

	getScheduleById: async (id: number | string): Promise<Property> => {
		try {
			const response = await api.get<Property>(`/uy/get_schedule/${id}/`);
			return response.data;
		} catch (error) {
			console.error(`Error fetching schedule ${id}:`, error);
			throw error;
		}
	},
	getCategoryById: async (id: number | string | any): Promise<Property> => {
		try {
			const response = await api.get<Property>(`/uy/get_category_by_id/${id}/`);
			return response.data;
		} catch (error) {
			console.error(`Error fetching schedule ${id}:`, error);
			throw error;
		}
	},

	updateSchedule: async (
		id: number | string,
		scheduleData: Partial<PropertyFormData> | FormData
	): Promise<Property> => {
		try {
			const response = await api.patch<Property>(
				`/uy/update_schedule/${id}/`,
				scheduleData
			);
			return response.data;
		} catch (error) {
			console.error(`Error updating schedule ${id}:`, error);
			throw error;
		}
	},

	deleteSchedule: async (id: number | string): Promise<void> => {
		try {
			await api.delete(`/uy/delete_schedule/${id}/`);
		} catch (error) {
			console.error(`Error deleting schedule ${id}:`, error);
			throw error;
		}
	},
};
