import type { NextPage } from 'next'
import BlockContainer from '../components/BlockComponent'
import styles from '../../styles/Home.module.css';

import { Context } from '../store/contexts/provider';
import { useContext } from 'react';
const Home: NextPage = () => {
  const { state, dispatch } = useContext(Context);


  function handleClick() {
    window.alert('Testando');
  }

  return (
    <div className={styles.main}>
      name{`${state.user.lastName} ${state.user.lastName}`}
      <BlockContainer content='Primeiro' />
      <BlockContainer content='Segundo' />
      <BlockContainer content='Terceiro' />
      <BlockContainer content='Quarto' />
    </div>
  );

}

export default Home
