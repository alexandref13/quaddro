import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from './styles/pages';
import { Form } from './components/Form';
import { Feed } from './components/Feed';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Quaddro | Home</title>
      </Head>
      <Form />
      <Feed />
    </Container>
  );
};

export default Home;
