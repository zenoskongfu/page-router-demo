import { GetServerSidePropsContext } from "next";

type serverProps = Pick<GetServerSidePropsContext, "req" | "query">;

export default function nextInjectScreenMode({ query }: serverProps): boolean {
	console.log("req:", query);

	if (!query) {
		return true;
	}

	return !Boolean(query.isMobile);
	// return query;
}
