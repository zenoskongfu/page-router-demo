import Square from "@/components/Square";

export default function ChatPC() {
	return (
		<div>
			<h1>PC</h1>
			<div className='flex flex-wrap'>
				{Array(1000)
					.fill(0)
					.map((_, index) => {
						return <Square key={index} content={index + ""}></Square>;
					})}
			</div>
		</div>
	);
}
