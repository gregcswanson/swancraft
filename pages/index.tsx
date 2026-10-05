import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head';
import { galleryShowcase } from '../data/gallery_showcase';
import { articles } from '../data/articles';
import { company } from '../data/company';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from 'next/image';

interface Props {
  showcase: any[],
  articles: any[],
  company: any
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      showcase: galleryShowcase,
      articles: articles.filter(f => f.show),
      company: company,
    }
  }
}

export default function Home({ showcase, articles, company }: Props) {

  return (
    <>
      <Head>
        <title>Swancraft</title>
      </Head>
      <Layout company={company}>
        <div className="App">

          <main>
            <section className="banner">
              <div className="position-relative overflow-hidden p-1 p-md-2 text-center card-cover-fill"
                style={{ backgroundImage: "url('" + company.bannerImage + "')" }}
              >
                <div className="col-md-5 p-lg-2 mx-auto my-5">
                  <div className="container">
                    <div className="row">
                      <div className="col" style={{ textAlign: 'center' }}>
                        <img src="/images/logo_transparent.png" className="banner-logo" alt={company.nam} />
                      </div>
                    </div>
                  </div>
                  <p className="lead fw-normal">{company.subtitle}</p>
                  <div className="container">
                    <div className="row">
                      <div className="col" style={{ textAlign: 'center' }}>
                        <a href={"tel:" + company.phone} className="btn btn-outline-light btn-lg wf-250 m-2">Call {company.phone}</a>
                      </div>
                      <div className="col" style={{ textAlign: 'center' }}>
                        <a href={"mailto:" + company.email} className="btn btn-outline-light btn-lg wf-250 m-2">Email</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
              </div>
            </section>
            <div className="container-fluid" style={{ display: 'none' }}>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/showcase/gallery/web_20151001_111209.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <section id="services" className="services"
              itemScope
              itemType="http://schema.org/Service">

              <div className="container px-3 py-4" id="custom-cards">
                <meta name="serviceType" content="Custom Fabrication" />
                <h2 className="sub-title">Services</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3" itemProp="hasOfferCatalog" itemScope itemType="http://schema.org/OfferCatalog">
                  {company.services.map((service: any) => (
                    <div className="col" key={"service" + service.title}>
                      <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg "
                        itemProp="itemListElement" itemScope
                        itemType="http://schema.org/OfferCatalog"
                        style={{ backgroundImage: "url('" + service.image + "')" }}>
                        <div className="d-flex flex-column h-100 pb-5 text-white text-shadow-1">
                          <div className="t-background p-3">
                            <h3 className="pt-1 mt-1 mb-4 display-6 fw-bold" itemProp="name">{service.title}</h3>
                            <p className="pt-3" itemType="http://schema.org/Service" itemProp="name">{service.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="recent" className="mb-3">
              <h2 className="sub-title mt-4 mb-1">Recent Work</h2>
              <div className="container">
                {articles.filter(f => f.show).map((item, index) =>
                  <>
                    {index % 2 == 0 && (
                      <>
                        <hr className="featurette-divider"></hr>
                        <div className="row featurette">
                          <div className="col-md-5">
                            <div className="card card-cover card-cover-fill hf-350 overflow-hidden text-white bg-dark rounded-5 shadow-lg "
                              style={{ backgroundImage: "url('" + item.image + "')" }}>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <h2 className="featurette-heading">{item.name}</h2>
                            <p className="lead">{item.description}</p>
                            <button type="button" className="btn btn-warning mb-3"
                              data-bs-toggle="modal"
                              data-bs-whatever={index.toString()}
                              data-bs-target="#recentModal">Gallery</button>
                          </div>
                        </div>
                      </>
                    )}
                    {index % 2 != 0 && (
                      <>
                        <hr className="featurette-divider"></hr>
                        <div className="row featurette">
                          <div className="col-md-7">
                            <h2 className="featurette-heading">{item.name}</h2>
                            <p className="lead">{item.description}</p>
                            <button type="button" className="btn btn-warning mb-3"
                              data-bs-toggle="modal"
                              data-bs-whatever={index.toString()}
                              data-bs-target="#recentModal">Gallery</button>
                          </div>
                          <div className="col-md-5">
                            <div className="card card-cover card-cover-fill hf-350 overflow-hidden text-white bg-dark rounded-5 shadow-lg "
                              style={{ backgroundImage: "url('" + item.image + "')" }}>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {item.gallery.map((galleryItem: any, galleryIndex: number) => <input type="hidden" data-bs-article={"article" + index.toString()} id={"galleryItem" + galleryIndex.toString()} name={"galleryItem" + galleryIndex.toString()} value={galleryItem.web} />)}
                  </>
                )}
                <div className="modal fade" id="recentModal" aria-labelledby="recentModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content modal-gallery">
                      <div className="modal-body gallery-view" data-bs-current="">
                        <img id="web-image"
                          src=""
                          className="gallery-web" alt="place 1" />
                      </div>
                      <div className="modal-footer">
                        <div style={{ flexGrow: 1 }}></div>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="nextArticleImageButton" type="button" className="btn btn-primary">Next</button>
                        <div style={{ flexGrow: 1 }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="callout">
              <div className="callout card-cover-fill hf-350 overflow-hidden"
                style={{ backgroundImage: "url('" + company.calloutImage + "')" }}>
              </div>
            </section>

            <section id="gallery" className="mt-3">
              <div className="container gallery">
                <h2 className="sub-title mt-4">Gallery</h2>
                <hr className="small style-scope swancraft-portfolio" />
                {showcase.map(item => (
                  <button key={"gallery" + item.name} type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-gallery-image={item.web}>
                    <div className="card card-cover card-cover-fill overflow-hidden text-white rounded-3 shadow-lg "
                      style={{ backgroundImage: "url('" + item.thumb + "')", width: '100px', height: '100px' }}>
                    </div>
                    <img
                      style={{ display: 'none' }}
                      src={item.thumb}
                      className="gallery-thumbnail" alt={item.name} />
                  </button>
                ))}
              </div>
              <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content modal-gallery">
                    <div className="modal-body gallery-view" data-bs-current="">
                      <img id="web-image"
                        src="/images/showcase/gallery/web_13681078_1011270415654813_7155931756064243442_n.jpg"
                        className="gallery-web" alt="place 1" />
                    </div>
                    <div className="modal-footer">
                      <div style={{ flexGrow: 1 }}></div>
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button id="nextGalleryItem" type="button" className="btn btn-primary">Next</button>
                      <div style={{ flexGrow: 1 }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="map hf-300 mt-3">
              <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53535.23621360306!2d151.592213!3d-33.005034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7324b10380b19b%3A0x591daf74ec2d9e2f!2s4%2F29%20Day%20St%2C%20Toronto%20NSW%202283!5e0!3m2!1sen!2sau!4v1620888232412!5m2!1sen!2sau">
              </iframe>
            </section>


          </main>

          <footer className="container py-5">
            <div className="row featurette" itemScope itemType="http://schema.org/LocalBusiness">
              <div className="col-md-5">
                <div className="card card-cover foot-image hf-250 overflow-hidden text-white px-2 rounded-5 shadow-lg mb-3"
                  style={{ backgroundImage: "url('" + company.logoImage + "')" }}>
                </div>
                <div className="card card-cover card-cover-fill hf-250 overflow-hidden text-white px-2 rounded-5 shadow-lg mb-3"
                  style={{ backgroundImage: "url('" + company.locationImage + "')" }}>
                </div>
                <img itemProp="logo" src={company.logoImage} alt={company.name + " Logo"} style={{ display: 'none' }}></img>
                <img itemProp="photo" src={company.locationImage} alt={company.name + " Location"} style={{ display: 'none' }}></img>
              </div>
              <div className="col-md-7">
                <h4 className="" itemProp="name">{company.name}</h4>
                <p className="text-muted" itemProp="description">{company.subtitle}</p>
                {company.phone && (
                  <>
                    <h4 className="featurette-subheading" itemProp="phone">Phone</h4>
                    <p className=""><a href={"tel:" + company.phone}>{company.phone}</a></p>
                  </>
                )}
                {company.email && (
                  <>
                    <h4 className="featurette-subheading" itemProp="email">Email</h4>
                    <p className=""><a href={"mailto:" + company.email}>{company.email}</a></p>
                  </>
                )}
                {company.address && (
                  <>
                    <h4 className="featurette-subheading" itemProp="address">Address</h4>
                    <p className="">{company.address}</p>
                  </>
                )}
                <h2 className="featurette-subheading">Social</h2>
                <p className="">
                  <a href={company.facebookUrl} target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#1877f2" className="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </p>
                <p><small className="d-block mb-3 text-muted">&copy; 2016–{new Date().getFullYear()}</small></p>
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  )
}
