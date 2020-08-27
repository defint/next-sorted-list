import useSWR from 'swr';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../components/Container';

const fetcher = url => fetch(url).then(res => res.json());

export async function getServerSideProps() {
  const helloData = await fetcher('http://localhost:3000/api/hello');
  return { props: { helloData } };
}

export default function Home(props) {
  const { data, error } = useSWR(
    "http://localhost:3000/api/hello",
    fetcher,
    { initialData: props.helloData }
  );
  
  return (
    <div>
      <div>Data from the server:</div>
      {data?.name || "Loading..."}
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  )
}
