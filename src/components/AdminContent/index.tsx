import { useNavigate } from "react-router-dom";

const AdminContent = () => {
  const navigate = useNavigate();

  // const userInfo = JSON.parse(localStorage.getItem("QUIZ_USER_INFO") as string);

  const onSignOut = () => {
    localStorage.removeItem("QUIZ_USER_INFO");

    navigate("/sign-in");
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src="assets-admin/img/hero-bg-light.webp" alt="" />
        </div>
        <div className="container text-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">
              Welcome to <span>QuickStart</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay={100}>
              Quickly start your project now and set the stage for success
              <br />
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
              <button onClick={onSignOut} className="btn-get-started">
                Sign Out
              </button>
            </div>
            <img
              src="assets-admin/img/hero-services-img.webp"
              className="img-fluid hero-img"
              alt=""
              data-aos="zoom-out"
              data-aos-delay={300}
            />
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* Featured Services Section */}
      <section id="featured-services" className="featured-services section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-briefcase" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Lorem Ipsum
                    </a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-card-checklist" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Dolor Sitema
                    </a>
                  </h4>
                  <p className="description">
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip exa
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-bar-chart" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Sed ut perspiciatis
                    </a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Featured Services Section */}
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <p className="who-we-are">Who We Are</p>
              <h3>Unleashing Potential with Creative Strategy</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <a href="#" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
            <div
              className="col-lg-6 about-images"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img
                    src="assets-admin/img/about-company-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img
                        src="assets-admin/img/about-company-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-12">
                      <img
                        src="assets-admin/img/about-company-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
      {/* Clients Section */}
      <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets-admin/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
            {/* End Client Item */}
          </div>
        </div>
      </section>
      {/* /Clients Section */}
      {/* Features Section */}
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex align-items-center">
              <ul
                className="nav nav-tabs"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-1"
                  >
                    <i className="bi bi-binoculars" />
                    <div>
                      <h4 className="d-none d-lg-block">
                        Modi sit est dela pireda nest
                      </h4>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-2"
                  >
                    <i className="bi bi-box-seam" />
                    <div>
                      <h4 className="d-none d-lg-block">
                        Unde praesenti mara setra le
                      </h4>
                      <p>
                        Recusandae atque nihil. Delectus vitae non similique
                        magnam molestiae sapiente similique tenetur aut
                        voluptates sed voluptas ipsum voluptas
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-3"
                  >
                    <i className="bi bi-brightness-high" />
                    <div>
                      <h4 className="d-none d-lg-block">
                        Pariatur explica nitro dela
                      </h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                        Debitis nulla est maxime voluptas dolor aut
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
              {/* End Tab Nav */}
            </div>
            <div className="col-lg-6">
              <div
                className="tab-content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="tab-pane fade active show" id="features-tab-1">
                  <img
                    src="assets-admin/img/tabs-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                {/* End Tab Content Item */}
                <div className="tab-pane fade" id="features-tab-2">
                  <img
                    src="assets-admin/img/tabs-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                {/* End Tab Content Item */}
                <div className="tab-pane fade" id="features-tab-3">
                  <img
                    src="assets-admin/img/tabs-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                {/* End Tab Content Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Features Section */}
      {/* Features Details Section */}
      <section id="features-details" className="features-details section">
        <div className="container">
          <div className="row gy-4 justify-content-between features-item">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <img
                src="assets-admin/img/features-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-lg-5 d-flex align-items-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="content">
                <h3>Corporis temporibus maiores provident</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <a href="#" className="btn more-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/* Features Item */}
          <div className="row gy-4 justify-content-between features-item">
            <div
              className="col-lg-5 d-flex align-items-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="content">
                <h3>Neque ipsum omnis sapiente quod quia dicta</h3>
                <p>
                  Quidem qui dolore incidunt aut. In assumenda harum id iusto
                  lorena plasico mares
                </p>
                <ul>
                  <li>
                    <i className="bi bi-easel flex-shrink-0" /> Et corporis ea
                    eveniet ducimus.
                  </li>
                  <li>
                    <i className="bi bi-patch-check flex-shrink-0" />{" "}
                    Exercitationem dolorem sapiente.
                  </li>
                  <li>
                    <i className="bi bi-brightness-high flex-shrink-0" /> Veniam
                    quia modi magnam.
                  </li>
                </ul>
                <p />
                <a href="#" className="btn more-btn">
                  Learn More
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                src="assets-admin/img/features-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          {/* Features Item */}
        </div>
      </section>
      {/* /Features Details Section */}
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item item-cyan position-relative">
                <i className="bi bi-activity icon" />
                <div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item item-orange position-relative">
                <i className="bi bi-broadcast icon" />
                <div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item item-teal position-relative">
                <i className="bi bi-easel icon" />
                <div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item item-red position-relative">
                <i className="bi bi-bounding-box-circles icon" />
                <div>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item item-indigo position-relative">
                <i className="bi bi-calendar4-week icon" />
                <div>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
              <div className="service-item item-pink position-relative">
                <i className="bi bi-chat-square-text icon" />
                <div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a
                    href="service-details.html"
                    className="read-more stretched-link"
                  >
                    Learn More <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
      {/* More Features Section */}
      <section id="more-features" className="more-features section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>Enim quis est voluptatibus aliquid consequatur</h3>
              <p>
                Esse voluptas cumque vel exercitationem. Reiciendis est hic
                accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
                voluptate sed facere corporis dolores excepturi
              </p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-easel flex-shrink-0" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias{" "}
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0" />
                  <div>
                    <h4>Nemo Enim</h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiise
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>Dine Pad</h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-brightness-high flex-shrink-0" />
                  <div>
                    <h4>Tride clov</h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
            <div
              className="features-image col-lg-5 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img src="assets-admin/img/features-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* /More Features Section */}
      {/* Pricing Section */}
      <section id="pricing" className="pricing section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
              <div className="pricing-item">
                <h3>Free Plan</h3>
                <p className="description">
                  Ullam mollitia quasi nobis soluta in voluptatum et sint palora
                  dex strater
                </p>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Voluptate id voluptas qui sed aperiam rerum</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Iure nihil dolores recusandae odit voluptatibus</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Pricing Item */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
              <div className="pricing-item featured">
                <p className="popular">Popular</p>
                <h3>Business Plan</h3>
                <p className="description">
                  Ullam mollitia quasi nobis soluta in voluptatum et sint palora
                  dex strater
                </p>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Voluptate id voluptas qui sed aperiam rerum</span>
                  </li>
                  <li className="na">
                    <i className="bi bi-x" />{" "}
                    <span>Iure nihil dolores recusandae odit voluptatibus</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Pricing Item */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
              <div className="pricing-item">
                <h3>Developer Plan</h3>
                <p className="description">
                  Ullam mollitia quasi nobis soluta in voluptatum et sint palora
                  dex strater
                </p>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <a href="#" className="cta-btn">
                  Start a free trial
                </a>
                <p className="text-center small">No credit card required</p>
                <ul>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Quam adipiscing vitae proin</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nec feugiat nisl pretium</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Nulla at volutpat diam uteera</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Voluptate id voluptas qui sed aperiam rerum</span>
                  </li>
                  <li>
                    <i className="bi bi-check" />{" "}
                    <span>Iure nihil dolores recusandae odit voluptatibus</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
        </div>
      </section>
      {/* /Pricing Section */}
      {/* Faq Section */}
      <section id="faq" className="faq section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
              <div className="faq-container">
                <div className="faq-item faq-active">
                  <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                  <div className="faq-content">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                  <div className="faq-content">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    Dolor sit amet consectetur adipiscing elit pellentesque?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    Tempus quam pellentesque nec nam aliquam sem et tortor?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                  <div className="faq-content">
                    <p>
                      Enim ea facilis quaerat voluptas quidem et dolorem. Quis
                      et consequatur non sed in suscipit sequi. Distinctio ipsam
                      dolore et.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
              </div>
            </div>
            {/* End Faq Column*/}
          </div>
        </div>
      </section>
      {/* /Faq Section */}
      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="swiper init-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets-admin/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets-admin/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets-admin/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets-admin/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                  </p>
                  <div className="profile mt-auto">
                    <img
                      src="assets-admin/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>
              {/* End testimonial item */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/* /Testimonials Section */}
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="bi bi-geo-alt" />
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-lg-3 col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
          <div className="row gy-4 mt-1">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 400 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* End Google Maps */}
            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </main>
  );
};

export default AdminContent;
