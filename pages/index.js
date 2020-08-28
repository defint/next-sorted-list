import useSWR from 'swr';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../components/Container';
import fetcher from '../utils/fetcher';

export async function getServerSideProps() {
  const helloData = await fetcher('http://localhost:3000/api/hello');
  const cardsData = await fetcher('http://localhost:3000/api/cards');
  return { props: { helloData, cardsData } };
}

export default function Home(props) {
  const { data } = useSWR(
    "http://localhost:3000/api/hello",
    fetcher,
    { initialData: props.helloData }
  );
    
  return (
    <div>
      <div>Data from the server:</div>
      {data?.name || "Loading..."}
      <DndProvider backend={HTML5Backend}>
        <Container cardsData={props.cardsData} />
      </DndProvider>
    </div>
  )
}
