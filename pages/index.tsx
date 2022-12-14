import {Button} from '@nextui-org/react'
import styles from './Home.module.css'
import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
      <>
        <Layout title='Paula Inglés'>
       
          <div className={styles.prueba}>
            Hola
          </div>

          <div className={styles.david}>
            <Button color={'gradient'}>
              Hola Mundo
            </Button>
          </div>
          
        </ Layout>
        
      </>
    )
}

