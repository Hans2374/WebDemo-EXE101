import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Introduction Section */}
        <div className={styles.footerSection}>
          <h3>GIỚI THIỆU CHUNG</h3>
          <ul>
            <li><Link to="/about">Giới thiệu về WheyStore</Link></li>
            <li><Link to="/order-guide">Hướng dẫn đặt hàng</Link></li>
            <li><Link to="/payment-guide">Hướng dẫn thanh toán</Link></li>
            <li><Link to="/terms">Quy định chung</Link></li>
            <li><Link to="/store-policy">Nội quy cửa hàng</Link></li>
            <li><Link to="/contact">Liên hệ & khiếu nại</Link></li>
            <li><Link to="/terms-of-trade">Điều khoản giao dịch</Link></li>
          </ul>
        </div>

        {/* Policy Section */}
        <div className={styles.footerSection}>
          <h3>CHÍNH SÁCH CHUNG</h3>
          <ul>
            <li><Link to="/privacy-policy">Chính sách dữ liệu</Link></li>
            <li><Link to="/security-policy">Chính sách bảo mật</Link></li>
            <li><Link to="/business-policy">Chính sách kinh doanh</Link></li>
            <li><Link to="/shipping-policy">Chính sách vận chuyển</Link></li>
            <li><Link to="/warranty-policy">Chính sách bảo hành</Link></li>
            <li><Link to="/return-policy">Chính sách đổi trả</Link></li>
            <li><Link to="/check-policy">Chính sách kiểm hàng</Link></li>
          </ul>
        </div>

        {/* Store Locations */}
        <div className={styles.footerSection}>
          <h3>DANH SÁCH CỬA HÀNG</h3>
          <ul className={styles.storeList}>
            <li>
              <span>125 Lê Thanh Nghị, HBT, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>17 Xuân Thuỷ, Cầu Giấy, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>21 Trần Phú, Hà Đông, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>450 Hoàng Diệu, Hải Châu, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>51 Trần Quốc Hoàn, Tân Bình, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>218 Bạch Đằng, P.24, Bình Thạnh, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
            <li>
              <span>391 Nguyễn Trãi, P.7, Q5, HCM</span>
              <Link to="/directions" className={styles.directionsLink}>Chỉ đường</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.footerSection}>
          <div className={styles.contact}>
            <h3>Tư vấn đặt hàng</h3>
            <a href="tel:0919013030" className={styles.phoneNumber}>091 901 3030</a>
          </div>
          <div className={styles.social}>
            <h3>Theo dõi chúng tôi tại</h3>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
              <a href="https://zalo.me" target="_blank" rel="noopener noreferrer"><i className="fas fa-comment"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copy Right©2024 bởi EXE101 - Group 170</p>
      </div>
    </footer>
  );
};

export default Footer;
