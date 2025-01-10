import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '../../images/whey-store-logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topHeader}>
        <div className={styles.container}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Whey Store Logo" />
          </Link>

          {/* Search Bar */}
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Tìm Sản Phẩm, Tìm Gì Cũng Thấy..."
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <Link to="/favorites" className={styles.actionButton}>
              <i className="fas fa-heart"></i>
              <span>Yêu thích</span>
            </Link>
            <Link to="/account" className={styles.actionButton}>
              <i className="fas fa-user"></i>
              <span>Tài khoản</span>
            </Link>
            <Link to="/cart" className={styles.actionButton}>
              <i className="fas fa-shopping-cart"></i>
              <span>Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <button className={styles.menuButton}>
            <i className="fas fa-bars"></i>
            <span>DANH MỤC</span>
          </button>
          <Link to="/showroom" className={styles.navLink}>
            <i className="fas fa-store"></i>
            <span>SHOWROOM</span>
          </Link>
          <Link to="/combo" className={styles.navLink}>
            <i className="fas fa-percentage"></i>
            <span>COMBO TIẾT KIỆM</span>
          </Link>
          <Link to="/about" className={styles.navLink}>
            <span>GIỚI THIỆU</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;