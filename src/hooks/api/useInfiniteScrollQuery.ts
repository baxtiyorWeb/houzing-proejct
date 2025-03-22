import { api } from '@/config/auth/api';
import { useInfiniteQuery } from '@tanstack/react-query';

const useInfiniteScrollQuery = ({
	key = 'infinite-query',
	url = '/',
	elements = {},
	initialPageParam = 0,
	showSuccessMsg = false,
	hideErrorMsg = false,
	enabled = true,
	options = {
		onSuccess: data => {
			if (showSuccessMsg) return data;
		},
		onError: error => {
			if (!hideErrorMsg) return error;
		},
	},
}) => {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		refetch,
		isLoading,
		isFetching,
		isError,
		error,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: [key],
		queryFn: ({ pageParam = initialPageParam }) =>
			api
				.post(
					url,
					{ page: pageParam, ...elements },
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
						},
					}
				)
				.then(response => response?.data?.data)
				.catch(error => {
					console.error('Error fetching data:', error);
					throw error;
				}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage?.length ? allPages?.length : undefined;
		},
		enabled,
		...options,
	});

	return {
		data,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
		refetch,
		isLoading,
		isFetching,
		isError,
		error,
	};
};

export default useInfiniteScrollQuery;
