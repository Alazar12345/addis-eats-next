import "./Footer.css";

export default function Footer(){

  return (

    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>Addis Eats</h2>
          <p>
            Authentic Ethiopian dishes
            delivered to your door.
          </p>
        </div>


        <div>
          <h3>Explore</h3>

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>

        </div>


        <div>

          <h3>Contact</h3>

          <p>
            Addis Ababa, Ethiopia
          </p>

          <p>
            support@addiseats.com
          </p>

        </div>


      </div>


      <div className="footer-bottom">

        © 2026 Addis Eats. All rights reserved.

      </div>


    </footer>

  );

}