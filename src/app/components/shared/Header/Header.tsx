'use client';
import Link from 'next/link'
import styles from './Header.module.sass'
import dynamic from 'next/dynamic'

const NoSsrShoppingCart = dynamic(() => import('../ShoppingCart'),{ssr : false});
export const Header = ({customer}) => {

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <NoSsrShoppingCart />
      </div>
    </header>)
}