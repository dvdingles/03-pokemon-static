import { Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export const Navbar = () => {

  const { theme } = useTheme()

  // console.log(theme)

  return (
      <>
        <div className={styles.navbar} /* style={{
          backgroundColor: theme?.colors.gray700.value
        }} */>

          <Image className={styles.imagen}
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Mountains"
        
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
          />
         


          <Text css={{fontWeight: '700', color: 'red'}}>Pokemon</Text>


          <div  style={{
            width: '100%',
            height: '33px',
            position:'relative'/* , border: 'solid 1px blue', */
          }}>
          </div>




          <Text css={{fontWeight: '700', color: 'blue'}}>Favoritos</Text>

        </div>
      </>
    )
}
