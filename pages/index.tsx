import {Button} from '@nextui-org/react'
import styles from './Home.module.css'
import { Layout } from '../components/layout/Layout';
import Image from 'next/image';
import  nave  from '../public/nave.jpg'

export default function Home() {
  return (
      <>
        <Layout title='Paula Inglés'>
       
          <div className={styles.prueba}>
            Auxiliar Manipuladora del Cartón
          </div>

          <div className={styles.david}>
            <Button color={'gradient'}>
              Inicio
            </Button>

            <div style={{display: 'block', position: 'relative'}}>
              <Image
                alt='nave'
                // src='/nave.jpg'
                src={nave}
                // fill
                width={333}
                height={333}
                // sizes='100%'
                style={{
                  objectFit: 'contain',
                  transition: 'all 1s ease',
                  transform: 'scale',
                }}
                className={styles.nave}
              />
            </div>
              
          </div>
          
        </ Layout>
        
      </>
    )
}

