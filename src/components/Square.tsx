export default function Square(props: { content: string }) {
	const handleClick = () => {
		console.log(props.content);
	};
	return (
		<div onClick={handleClick} className='flex justify-center items-center rounded bg-blue-200 w-[50px] h-[50px]'>
			{props.content}
		</div>
	);
}
