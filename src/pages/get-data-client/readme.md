pages router模式下，只支持两种获取数据的方式：
1. 通过useEffect 或者 useSWR 在客户端中获取数据
2. 通过 getServerSideProps，或者 getStaticProps 在server端获取数据

⚠️ pages router模式不支持这种用法！！！
```jsx
const ChildrenComponent = async () => {
	const data = await fetcher();

	return <div className='pt-10'>{data?.name || "no data"}</div>;
};
```