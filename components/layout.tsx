import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface LayoutProps {
  children: React.ReactNode
  company: {
    name: string
    phone: string
  }
}

export default function Layout({ children, company }: LayoutProps) {
  return (
    <>
      <a className={styles.skipLink} href="#main-content">Skip to content</a>
      <header className={styles.header} id="top">
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand} aria-label={`${company.name} home`}>
            <Image src="/images/logo_transparent.png" alt="Swancraft" width={188} height={78} unoptimized priority />
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/#services">Services</Link>
            <Link href="/#work">Our work</Link>
            <Link href="/#gallery">Gallery</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <a className={styles.headerCall} href={`tel:${company.phone}`}>
            <span>Call the workshop</span>
            <b>{company.phone}</b>
          </a>
        </div>
      </header>
      {children}
    </>
  )
}

/*
<div className="col-md-3 text-end">
          <a href={"mailto:" + company.email} className="btn btn-info me-2">Email</a>
        </div>
*/