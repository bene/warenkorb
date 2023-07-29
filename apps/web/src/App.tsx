import { trpc } from "./trpc";

function App() {
  const { data, isLoading } = trpc.list.demo.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return <div>Key: {data.key}</div>;
}

export default App;
