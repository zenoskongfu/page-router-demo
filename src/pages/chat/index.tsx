import nextInjectScreenMode from "@/utils/nextInjectScreenMode";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const PC = dynamic(() => import("@chat/PC"), { ssr: true, loading: () => <div>pc loading...</div> });
const Mobile = dynamic(() => import("@chat/Mobile"), { ssr: false, loading: () => <div>mobile loading...</div> });

export default function Chat(props: any) {
	console.log("chat++++++++++++++");
	return (
		<div>
			chat, {props.name}
			<div className='pt-10'>
				<Suspense fallback={<div>chat loading....</div>}>{props.isPC ? <PC /> : <Mobile />}</Suspense>
			</div>
		</div>
	);
}

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
	return {
		props: { name: "zenos", isPC: nextInjectScreenMode({ req, query }) },
	};
};
