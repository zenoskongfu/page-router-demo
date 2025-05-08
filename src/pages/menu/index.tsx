export default function Menu(props: { menus: { content: string }[] }) {
	console.log("menu+++++++++++++++++++");
	return <div>menu contents: {props.menus.map((item) => item.content).join(",")}</div>;
}

export const getStaticProps = () => {
	return {
		props: {
			menus: [{ content: "menu1" }, { content: "menu2" }],
		},
	};
};
