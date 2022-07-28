import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Hermes | checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <Navbar />
      <div className="checkout_main" style={{ marginTop: '200px' }}>
        <div className="checkout_left">
          <div className="box" style={{ transform: 'scale(1.2)' }}>
            <img src="/images/product-1.png" alt="" />
            <div className="content">
              <h3>nike shoes</h3>
              <div className="price">
                $120.99 <span>$150.99</span>
              </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout_right">
          <h1>Checkout</h1>
          <form action="">
            <input type="email" placeholder="Email" className="box" />
            <input type="Password" placeholder="password" className="box" />
            <input type="text" placeholder="Payment Method" className="box" />
            <button type="submit" value="send" className="btn">
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}