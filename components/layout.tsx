import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  company: any;
}

export default function Layout({ children, company }: LayoutProps) {
  return <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon_swancraft.ico" />
    </Head>
    <div>

      <header className="site-header sticky-top py-1 d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none d-lg-inline-block d-none">
          <img src="/images/logo_transparent.png" style={{marginLeft: '20px', marginRight: '20px', height: '40px' }} />
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary d-none d-lg-block">Home</a></li>
          <li><a href="#services" className="nav-link px-2 link-dark d-none d-lg-block">Services</a></li>
          <li><a href="#recent" className="nav-link px-2 link-dark d-none d-lg-block">Recent Work</a></li>
          <li><a href="#gallery" className="nav-link px-2 link-dark d-none d-lg-block">Gallery</a></li>
          <li><a href="#contact" className="nav-link px-2 link-dark d-none d-lg-block">Contact Us</a></li>
        </ul>

        <div className="col-md-3 text-end">
          
        </div>
      </header>

      {children}
    </div>
  </>
}

/*
<div className="col-md-3 text-end">
          <a href={"mailto:" + company.email} className="btn btn-info me-2">Email</a>
        </div>
*/