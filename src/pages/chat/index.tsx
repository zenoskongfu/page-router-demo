import nextInjectScreenMode from "@/utils";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const PC = dynamic(() => import("@chat/PC"), { ssr: true });
const Mobile = dynamic(() => import("@chat/Mobile"), { ssr: false });

export default function Chat(props: any) {
	console.log("chat++++++++++++++");
	return (
		<div>
			chat, {props.name}
			<div className='pt-10'>{props.isPC ? <PC /> : <Mobile />}</div>
		</div>
	);
}

export const getServerSideProps = async ({ req, query }: GetServerSidePropsContext) => {
	return {
		props: { name: "zenos", isPC: nextInjectScreenMode({ req, query }) },
	};
};
