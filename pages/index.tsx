import {Button} from '@nextui-org/react'
import styles from './Home.module.css'

export default function Home() {
  return (
      <>
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

