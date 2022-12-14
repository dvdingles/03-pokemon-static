import {Button} from '@nextui-org/react'
import { Layout } from '../components/layout/Layout'
import styles from './Home.module.css'

export default function Home() {
  return (
      <>
        <Layout />
        <div className={styles.prueba}>
          Hola
        </div>
        <div className={styles.david}>
          <Button color={'gradient'}>
            Hola Mundo
          </Button>
        </div>
      </>
    )
}

