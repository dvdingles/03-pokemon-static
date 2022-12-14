import { Text, useTheme } from '@nextui-org/react'
import styles from './Navbar.module.css'

export const Navbar = () => {

  const { theme } = useTheme()

  // console.log(theme)

  return (
      <>
        <div className={styles.navbar} /* style={{
          backgroundColor: theme?.colors.gray700.value
        }} */>

        <Text css={{fontWeight: '700', color: 'red'}}>Pokemon</Text>
        <div style={{
          width: '100%'/* , border: 'solid 1px blue', */
        }}>

        </div>
        <Text css={{fontWeight: '700', color: 'blue'}}>Favoritos</Text>

        </div>
      </>
    )
}
