function Header() {
  return (
    <>
      <a href="#">
        <img className="logo" src="src/assets/cultLogo 1.png" alt="Logo" />
      </a>
      <ul className="links">
        <li>
          <a href="App.jsx">Home</a>
        </li>
        <li>
          <a href="src/About.html">About</a>
        </li>
        <li>
          <a href="src/Services.html">Services</a>
        </li>
        <li>
          <a href="src/Portfolio.html">Portfolio</a>
        </li>
        <li>
          <a href="src/Contact.html">Contact</a>
        </li>
      </ul>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <>
      <div className="headline">
        <h2>Empowering Brands with Creative Digital Solutions</h2>
        <h3>
          Cult Agency brings your brand’s vision to life through innovative web
          development, dynamic digital marketing, and captivating visual
          content.
        </h3>
      </div>

      <div className="WhoAreWe">
        <h1>Who are We?</h1>
        <p>
          At Cult Agency, we specialize in transforming ideas into powerful
          digital experiences. With a focus on creativity, strategy, and
          results, we help businesses thrive in the digital age. Whether you
          need a stunning website, a compelling marketing strategy, or
          eye-catching visuals, our team is here to elevate your brand.
        </p>
        <a href="src/About.html">Read Our Story</a>
      </div>
    </>
  );
}

function Services() {
  return (
    <>
      <div className="slider">
        <h1 className="title">Featured Services</h1>
        <br />
        <div className="services">
          <div className="service">
            <img src="src/assets/web.jpg" alt="" />
            <h1>Web Development:</h1>
            <p>
              Custom, responsive, and scalable websites that engage and convert.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/marketing.jpg" alt="" />
            <h1>Digital Marketing: </h1>
            <p>
              Data-driven strategies that boost your brand’s visibility and
              impact.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/design.jpg" alt="" />
            <h1>Graphic Design: </h1>
            <p>
              Creative visuals that capture attention and communicate your
              message.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/photography 1.png" alt="" />
            <h1>Photography: </h1>
            <p>Professional photography that brings your brand to life.</p>
          </div>

          <div className="service">
            <img src="src/assets/web.jpg" alt="" />
            <h1>Web Development:</h1>
            <p>
              Custom, responsive, and scalable websites that engage and convert.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/marketing.jpg" alt="" />
            <h1>Digital Marketing: </h1>
            <p>
              Data-driven strategies that boost your brand’s visibility and
              impact.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/design.jpg" alt="" />
            <h1>Graphic Design: </h1>
            <p>
              Creative visuals that capture attention and communicate your
              message.
            </p>
          </div>

          <div className="service">
            <img src="src/assets/photography 1.png" alt="" />
            <h1>Photography: </h1>
            <p>Professional photography that brings your brand to life.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="contact-info">
          <h2>Contact info</h2>
          <ul>
            <li>
              <h4>Phone: </h4>
              <a href="tel:+20 150 051 1826">+20 150 051 1826</a>
            </li>
            <li>
              <h4>Email: </h4>
              <a href="mailto:info@cultsmma.com">info@cultsmma.com</a>
            </li>
          </ul>
        </div>
        <div className="quickLinks">
          <ul>
            <li>
              <a href="src/About.html">About Us</a>
            </li>
            <li>
              <a href="src/Services.html">Services</a>
            </li>
            <li>
              <a href="src/Portfolio.html">Portfolio</a>
            </li>
            <li>
              <a href="Blog.html">Blog</a>
            </li>
            <li>
              <a href="src/Contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="location">
          <h1>Cairo</h1>
          <h3>Sheikh Zayed</h3>
        </div>
        <div className="socialmedias">
          <ul>
            <li>
              <a href="https://www.facebook.com/share/jesgLuCXhcfqft8c/?mibextid=LQQJ4d">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cult_smma?igsh=NnZjMWp6bHJkdGJx">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@cult_agency?_t=8pTN4pQa5QI&_r=1">
                Tiktok
              </a>
            </li>
            <li>
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fposts%2Fcult-business-solutions_cultagency-cultkit-webdevelopment-activity-7219334971071614977-qQtx%3Futm_source%3Dshare%26utm_medium%3Dmember_ios&e=AT2QMx83EKAxrICxeQ2vOywP5KKmjxH6sdcQ9CuwEnk8dtD8XrBI_QFZ5ucQuRYfR1-AwQPwQ3RJQkfY1YaEZzRr71Ajzs8d6q9nCw">
                Linkdeln
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
