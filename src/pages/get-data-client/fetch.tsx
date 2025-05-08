import { fetcher } from "../../utils/_fetcher";

export default function Fetch(props: { name: string }) {
	return (
		<div>
			fetch
			<div className='pt-5'>{props?.name || "no data"}</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const data = await fetcher();
	return {
		props: data,
	};
};
