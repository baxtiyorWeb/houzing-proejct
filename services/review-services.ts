import api from '@/lib/axios';
import { Review } from '@/types';

export const ReviewServices = {
	createReview: async (Reviews: Review): Promise<Review> => {
		try {
			const response = await api.post<Review>('/uy/create_review/', Reviews);
			return response.data;
		} catch (error) {
			console.error('Error creating category:', error);
			throw error;
		}
	},
	getReview: async (Reviews: Review): Promise<Review> => {
		try {
			const response = await api.post<Review>('/uy/get_review/', Reviews);
			return response.data;
		} catch (error) {
			console.error('Error creating category:', error);
			throw error;
		}
	},
};
