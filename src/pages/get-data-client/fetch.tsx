import { fetcher } from "./fetcher";

export default async function Fetch() {
	const data = await fetcher();

	return (
		<div>
			swr
			<div className='pt-10'>{data?.name || "no data"}</div>
		</div>
	);
}
