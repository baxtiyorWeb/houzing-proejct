import { api } from '@/config/auth/api';
import { useQuery } from '@tanstack/react-query';

const fetchRequest = (url: string, params) => api.get(url, params);

const useGetOneQuery = ({
	id = null,
	key = 'get-one',
	url = 'test',
	enabled = true,
	params = {},
	showSuccessMsg = false,
	showErrorMsg = true,
}) => {
	const { isLoading, isError, data, error, refetch } = useQuery({
		queryKey: [key, id],
		queryFn: () => fetchRequest(url, params),
		enabled,
		onSuccess: res => {
			if (showSuccessMsg) return res;
		},
		onError: err => {
			if (showErrorMsg) return err;
		},
	});

	return {
		isLoading,
		isError,
		data,
		error,
		refetch,
	};
};

export default useGetOneQuery;
