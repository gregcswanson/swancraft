import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { articles as allArticles } from '../data/articles'
import { company } from '../data/company'
import { galleryShowcase } from '../data/gallery_showcase'

type Project = {
  name: string
  slug: string
  image: string
  description: string
  gallery: { name: string; web: string }[]
}

type ShowcaseImage = {
  name: string
  thumb: string
  web: string
}

type HomeProps = {
  company: typeof company
  articles: Project[]
  showcase: ShowcaseImage[]
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
  props: {
    company,
    articles: allArticles.filter((article) => article.show).map((article) => ({
      name: article.name,
      slug: article.slug,
      image: article.image,
      description: article.description,
      gallery: article.gallery.map((image) => ({ name: image.name, web: image.web })),
    })),
    showcase: galleryShowcase.slice(0, 12).map((image) => ({
      name: image.name,
      thumb: image.thumb,
      web: image.web,
    })),
  },
})

export default function Home({ showcase, articles, company }: HomeProps) {
  return (
    <>
      <Head>
        <title>Swancraft | Marine Fabrication &amp; Repairs</title>
        <meta name="description" content="Custom marine fabrication, welding and repairs in Toronto, NSW. Stainless steel, aluminium and mild steel work for boats." />
        <meta name="theme-color" content="#f4f5f0" />
      </Head>
      <Layout company={company}>
        <main className={styles.page} id="main-content">
          <section
            className={styles.hero}
            style={{ backgroundImage: `linear-gradient(90deg, rgba(12, 31, 30, .88) 0%, rgba(12, 31, 30, .62) 45%, rgba(12, 31, 30, .08) 100%), url("${company.calloutImage}")` }}
          >
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}><span className={styles.eyebrowMark} /> Toronto, NSW <span className={styles.eyebrowDivider}>/</span> Lake Macquarie</p>
              <h1 className={styles.heroTitle}>Marine metalwork, made to last.</h1>
              <p className={styles.heroCopy}>Custom fabrication, welding and repairs for boats that earn their keep on the water.</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href={`tel:${company.phone}`}>Call {company.phone}</a>
                <a className={styles.textAction} href="#work">Explore recent work</a>
              </div>
            </div>
          </section>

          <section className={styles.services} id="services">
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>What we do</p>
              <h2>Practical work.<br />Made for the marine environment.</h2>
              <p>From a small repair to a full restoration, Swancraft brings hands-on experience to every job.</p>
            </div>
            <div className={styles.serviceList}>
              {company.services.map((service, index) => (
                <article className={styles.serviceItem} key={service.title}>
                  <span className={styles.serviceNumber}>0{index + 1}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.details}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.materials}>
              <span>Materials we work with</span>
              <p>Stainless steel <i /> Aluminium <i /> Mild steel</p>
            </div>
          </section>

          <section className={styles.work} id="work">
            <div className={styles.workHeading}>
              <div>
                <p className={styles.sectionLabel}>Selected projects</p>
                <h2>Work that goes<br />beyond the workshop.</h2>
              </div>
              <p>Repairs, restorations and custom fabrication for vessels around Lake Macquarie and beyond.</p>
            </div>
            <div className={styles.projectGrid}>
              {articles.map((article, index) => (
                <article className={styles.project} key={article.slug}>
                  <div className={styles.projectImage}>
                    <Image src={article.image} alt={article.name} width={960} height={640} unoptimized />                    
                  </div>
                  <div className={styles.projectDetails}>
                    <div>
                      <p className={styles.projectType}>Restoration</p>
                      <h3>{article.name}</h3>
                      <p>{article.description}</p>
                    </div>
                    <div className={styles.projectActions}>
                      <Link className={styles.projectLink} href={`/articles/${article.slug}`}>Project details</Link>
                      <button
                        className={styles.projectAction}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-whatever={String(index)}
                        data-bs-target="#recentModal"
                      >View photos</button>
                    </div>
                  </div>
                  {article.gallery.map((image, imageIndex) => (
                    <input
                      key={`${article.slug}-${image.name}`}
                      type="hidden"
                      data-bs-article={`article${index}`}
                      id={`gallery-${index}-${imageIndex}`}
                      value={image.web}
                      readOnly
                    />
                  ))}
                </article>
              ))}
            </div>
          </section>

          <section className={styles.gallerySection} id="gallery">
            <div className={styles.galleryHeading}>
              <div>
                <p className={styles.sectionLabel}>Around the shop</p>
                <h2>A closer look at the work.</h2>
              </div>
              <p>Small details, big repairs, and everything in between.</p>
            </div>
            <div className={styles.galleryGrid}>
              {showcase.map((image) => (
                <button
                  key={image.name}
                  className={styles.galleryImage}
                  type="button"
                  aria-label={`Open photo ${image.name}`}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-gallery-image={image.web}
                >
                  <Image src={image.thumb} alt={image.name.replace(/\.jpg$/i, '').replace(/[_-]/g, ' ')} width={240} height={180} unoptimized />
                  <span aria-hidden="true">+</span>
                </button>
              ))}
            </div>
          </section>

          <section className={styles.contact} id="contact">
            <div className={styles.contactInfo}>
              <p className={styles.sectionLabel}>Get in touch</p>
              <h2>Let’s talk about<br />what your boat needs.</h2>
              <p className={styles.contactLead}>Call or email Swancraft to discuss a repair, a new fabrication, or a restoration.</p>
              <a className={styles.contactPhone} href={`tel:${company.phone}`}>{company.phone}</a>
              <a className={styles.contactEmail} href={`mailto:${company.email}`}>{company.email}</a>
              <p className={styles.contactAddress}>{company.address}</p>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                title="Map to Swancraft in Toronto, New South Wales"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53535.23621360306!2d151.592213!3d-33.005034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7324b10380b19b%3A0x591daf74ec2d9e2f!2s4%2F29%20Day%20St%2C%20Toronto%20NSW%202283!5e0!3m2!1sen!2sau!4v1620888232412!5m2!1sen!2sau"
              />
              <a href="https://maps.google.com/?q=4/29+Day+St,+Toronto+NSW+2283" target="_blank" rel="noreferrer">Open in Maps</a>
            </div>
          </section>

          <footer className={styles.footer}>
            <a href="#top" className={styles.footerBrand}>Swancraft<span>®</span></a>
            <p>{company.subtitle}<br />Toronto, New South Wales</p>
            <a href={company.facebookUrl} target="_blank" rel="noreferrer" className={styles.footerSocial}>Facebook</a>
            <small>© {new Date().getFullYear()} Swancraft</small>
          </footer>

          <div className={`modal fade ${styles.galleryModal}`} id="recentModal" aria-labelledby="recentModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="recentModalLabel">Project photos</h2>
                  <button type="button" className={styles.modalClose} data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
                <div className="modal-body gallery-view" data-bs-current="">
                  <img id="web-image" src="/images/yacht/gallery/web_01.jpg" className="gallery-web" alt="Project detail" />
                </div>
                <div className="modal-footer">
                  <button type="button" className={styles.modalClose} data-bs-dismiss="modal">Close gallery</button>
                  <button id="nextArticleImageButton" type="button" className={styles.modalNext}>Next photo <span aria-hidden="true">→</span></button>
                </div>
              </div>
            </div>
          </div>

          <div className={`modal fade ${styles.galleryModal}`} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id="exampleModalLabel">Swancraft gallery</h2>
                  <button type="button" className={styles.modalClose} data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
                <div className="modal-body gallery-view" data-bs-current="">
                  <img id="web-image" src="/images/showcase/gallery/web_13681078_1011270415654813_7155931756064243442_n.jpg" className="gallery-web" alt="Swancraft marine fabrication project" />
                </div>
                <div className="modal-footer">
                  <button type="button" className={styles.modalClose} data-bs-dismiss="modal">Close gallery</button>
                  <button id="nextGalleryItem" type="button" className={styles.modalNext}>Next photo <span aria-hidden="true">→</span></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
