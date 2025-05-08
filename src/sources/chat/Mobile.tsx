import Square from "@/components/Square";

export default function ChatMobile() {
	return (
		<div>
			<h1>Mobile</h1>
			<div className='flex flex-wrap'>
				{Array(10000)
					.fill(0)
					.map((_, index) => {
						return <Square key={index} content={index + ""}></Square>;
					})}
			</div>
		</div>
	);
}
