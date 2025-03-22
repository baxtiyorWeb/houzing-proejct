import { api } from '@/config/auth/api';
import { useMutation, useQueryClient } from 'react-query';

type PutRequestProps = {
	url: string;
	attributes?: null | undefined;
};

const putRequest = ({ url, attributes }: PutRequestProps) =>
	api.put(url, attributes);

type UsePutQueryProps = {
	hideSuccessToast?: boolean;
	listKeyId?: string | null;
};

const usePutQuery = ({
	hideSuccessToast = false,
	listKeyId = null,
}: UsePutQueryProps) => {
	const queryClient = useQueryClient();

	const { mutate, isLoading, isError, error } = useMutation<
		unknown, // Serverdan keladigan natija turi
		unknown, // Xatolik turi
		PutRequestProps // Mutate-ga beriladigan argumentlar
	>(params => putRequest(params), {
		onSuccess: data => {
			if (!hideSuccessToast) {
				console.log('✅ Success:', data);
			}
			if (listKeyId) {
				queryClient.invalidateQueries(listKeyId);
			}
		},
		onError: err => {
			console.error('❌ Error:', err);
		},
	});

	return {
		mutate,
		isLoading,
		isError,
		error,
	};
};

export default usePutQuery;
