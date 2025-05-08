import useSWR from "swr";
import { fetcher } from "../../utils/_fetcher";

export default function Swr() {
	const { data, isLoading } = useSWR("swr-page", fetcher);

	if (isLoading) return <div>loading...</div>;

	return (
		<div>
			swr
			<div className='pt-10'>{data?.name || "no data"}</div>
		</div>
	);
}
