import styles from './style.module.css';


type Props = {
  content: string;
}

function BlockContainer({ content }: Props) {
  return (
    <div className={styles.container}>{content}</div>
  );
}

export default BlockContainer;