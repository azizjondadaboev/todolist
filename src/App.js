import Header from './components/header';
import Tasks from './components/tasks';
import { Container } from './components/ui';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Tasks />
      </Container>
    </>
  );
}

export default App;
