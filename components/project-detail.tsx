import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './layout'
import styles from '../styles/Project.module.css'

type ProjectPhoto = {
  name: string
  thumb: string
  web: string
}

type Project = {
  name: string
  description: string
  image: string
  gallery: ProjectPhoto[]
}

type ProjectDetailProps = {
  company: {
    name: string
    phone: string
  }
  project: Project
}

export default function ProjectDetail({ company, project }: ProjectDetailProps) {
  return (
    <>
      <Head>
        <title>{project.name} | Swancraft</title>
        <meta name="description" content={project.description} />
      </Head>
      <Layout company={company}>
        <main className={styles.page} id="main-content">
          <div className={styles.intro}>
            <Link className={styles.backLink} href="/#work">Back to selected work</Link>
            <div className={styles.titleBlock}>
              <p className={styles.eyebrow}>Swancraft / Project</p>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </div>
          </div>

          <figure className={styles.featureImage}>
            <Image src={project.image} alt={project.name} width={1500} height={900} unoptimized priority />
            <figcaption>Marine fabrication and restoration, Toronto NSW</figcaption>
          </figure>

          <section className={styles.photos} aria-labelledby="project-photos-title">
            <div className={styles.photoHeading}>
              <div>
                <p className={styles.eyebrow}>From the gallery</p>
                <h2 id="project-photos-title">Project photos</h2>
              </div>
              <p>A selection of details from the work.</p>
            </div>
            <div className={styles.photoGrid}>
              {project.gallery.map((photo) => (
                <a className={styles.photo} href={photo.web} target="_blank" rel="noreferrer" key={photo.name}>
                  <Image src={photo.thumb} alt={photo.name.replace(/\.jpg$/i, '').replace(/[_-]/g, ' ')} width={640} height={480} unoptimized />
                  <span>Open full photo</span>
                </a>
              ))}
            </div>
          </section>

          <section className={styles.contact}>
            <p className={styles.eyebrow}>Have a similar project?</p>
            <h2>Tell us what you’re working on.</h2>
            <a href={`tel:${company.phone}`}>Call {company.phone}</a>
          </section>
          <footer className={styles.footer}>
            <Link href="/">Swancraft</Link>
            <span>Marine fabrication &amp; repairs · Toronto, NSW</span>
          </footer>
        </main>
      </Layout>
    </>
  )
}