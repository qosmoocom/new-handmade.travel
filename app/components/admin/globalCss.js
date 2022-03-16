export const cssText = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Akrobat', sans-serif;
}
body {
  background-color: #fafafa;
  overflow-x: hidden;
}
.plane {
  display: none;
}
@media (min-width: 576px) {
  .plane {
    display: flex;
    align-content: center;
    justify-content: flex-end;
  }
}
.plane article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.plane .plane-btn {
  transform: rotate(-90deg);
  font-size: 30px;
  color: #cc5a1a;
}
@media (min-width: 1200px) {
  .plane .plane-btn {
    font-size: 40px;
  }
}
#header {
  position: relative;
  padding-top: 40px;
}
@media (min-width: 992px) {
  .header_navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.header_navbar_logo {
  display: none;
}
@media (min-width: 992px) {
  .header_navbar_logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 992px) {
  .header_navbar_logo .header_navbar_logo_box {
    border-radius: 50%;
    box-shadow: #00000040 4px 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    width: 100px;
    height: 100px;
  }
}
@media (min-width: 1200px) {
  .header_navbar_logo .header_navbar_logo_box {
    width: 140px;
    height: 140px;
  }
}
@media (min-width: 992px) {
  .header_navbar_logo .header_navbar_logo_text {
    font-size: 15px;
    text-transform: uppercase;
    color: #f2764b;
    font-weight: bold;
    margin-top: 24px;
    min-width: 170px;
  }
}
.header_nav_menu {
  display: none;
}
@media (min-width: 992px) {
  .header_nav_menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (min-width: 992px) {
  .header_nav_menu .header_nav_menu_item a {
    padding: 5px 18px;
    color: #000;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0 10px;
    font-weight: 600;
  }
}
.mobile-menu-icon {
  margin-left: 10px;
  font-size: 18px;
}
@media (min-width: 576px) {
  .mobile-menu-icon {
    margin-left: 20px;
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  .mobile-menu-icon {
    display: none;
  }
}
.header_texts_box {
  padding: 30px 0 10px 0;
}
@media (min-width: 576px) {
  .header_texts_box {
    padding: 30px 0 22px 0;
  }
}
@media (min-width: 768px) {
  .header_texts_box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (min-width: 992px) {
  .header_texts_box {
    align-items: flex-start;
    padding: 20px 0 22px 0px;
  }
}
.header_texts_box .header_middle_text {
  color: #cc5a1a;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 117.6%;
  letter-spacing: 0.005em;
}
@media (min-width: 360px) {
  .header_texts_box .header_middle_text {
    font-size: 18px;
  }
}
@media (min-width: 400px) {
  .header_texts_box .header_middle_text {
    font-size: 14.9px;
  }
}
@media (min-width: 576px) {
  .header_texts_box .header_middle_text {
    font-size: 20px;
  }
}
@media (min-width: 768px) {
  .header_texts_box .header_middle_text {
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  .header_texts_box .header_middle_text {
    font-size: 22px;
  }
}
@media (min-width: 1200px) {
  .header_texts_box .header_middle_text {
    font-size: 28px;
  }
}
.header_texts_box .header_big_text {
  color: #cc5a1a;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  margin-top: 5px;
}
@media (min-width: 360px) {
  .header_texts_box .header_big_text {
    font-size: 32px;
  }
}
@media (min-width: 400px) {
  .header_texts_box .header_big_text {
    font-size: 37px;
  }
}
@media (min-width: 576px) {
  .header_texts_box .header_big_text {
    font-size: 50px;
  }
}
@media (min-width: 768px) {
  .header_texts_box .header_big_text {
    font-weight: 700;
  }
}
@media (min-width: 992px) {
  .header_texts_box .header_big_text {
    font-size: 60px;
    letter-spacing: 0.6px;
  }
}
@media (min-width: 1200px) {
  .header_texts_box .header_big_text {
    font-size: 80px;
  }
}
.header_texts_box .header_small_text {
  font-size: 13px;
  color: #cc5a1a;
  line-height: 15px;
  letter-spacing: 0.005em;
  margin-top: 4px;
  font-weight: 500;
}
@media (min-width: 360px) {
  .header_texts_box .header_small_text {
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.4px;
  }
}
@media (min-width: 400px) {
  .header_texts_box .header_small_text {
    font-size: 13.9px;
    line-height: 1.4;
  }
}
@media (min-width: 576px) {
  .header_texts_box .header_small_text {
    font-size: 15px;
    line-height: 20px;
  }
}
@media (min-width: 768px) {
  .header_texts_box .header_small_text {
    text-align: center;
  }
}
@media (min-width: 992px) {
  .header_texts_box .header_small_text {
    text-align: left;
    padding-right: 20px;
    font-size: 18px;
  }
}
@media (min-width: 1200px) {
  .header_texts_box .header_small_text {
    font-size: 21px;
    line-height: 1.3;
    max-width: 700px;
  }
}
.mobile-left-menu-wrapper {
  width: 100%;
  height: 100vh;
  background: rgba(1, 1, 1, 0.37);
  position: fixed;
  z-index: 54;
  top: 0;
  left: -104%;
  transition: all 0.4s;
}
.mobile-left-menu-wrapper.active {
  left: 0;
  transition: all 0.4s;
}
.mobile-left-menu-wrapper .mobile-after-bg {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
}
.mobile-menu-open {
  position: absolute;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 3;
  background-color: #fff;
  top: 0;
  left: 0;
  max-width: 300px;
}
.mobile-menu-open .header_nav_menu_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}
.mobile-menu-open .btn-logo-and-mobile {
  justify-content: center;
  padding-top: 30px;
  position: relative;
}
.mobile-menu-open .btn-logo-and-mobile .close-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.mobile-menu-open .btn-logo-and-mobile .close-btn .close-btn-icon {
  color: #444;
  font-size: 20px;
}
.mobile-menu-open .btn-logo-and-mobile .header_navbar_logo_box_mobile {
  width: 155px;
  height: 155px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
  display: inline-block;
  padding: 3px;
}
.mobile-menu-open .btn-logo-and-mobile .header_navbar_logo_text_mobile {
  font-size: 15px;
  text-transform: uppercase;
  color: #f2764b;
  font-weight: bold;
  margin-top: 24px;
}
.mobile-menu-open .header_navbar_btn_mobile {
  display: none;
}
.mobile-menu-open .header_nav_menu_item_mobile {
  width: 90%;
  border-bottom: 1px solid black;
  margin: 0 auto;
}
.mobile-menu-open .header_nav_menu_item_mobile a {
  color: #000;
  font-size: 12px;
  padding: 4px 0px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 10px 0;
  display: block;
  font-weight: 500;
}
.mobile-menu-open .header_navbar_social-m {
  padding-left: 15px;
  padding-top: 40px;
}
.header_nav_menu_mobile {
  display: none;
}
@media (min-width: 992px) {
  .header_nav_menu_mobile {
    display: block;
  }
}
.header_main_bgi {
  display: none;
}
@media (min-width: 567px) {
  .header_main_bgi {
    display: block;
  }
}
@media (min-width: 567px) {
  .header_main_bgi_mobile {
    display: none;
  }
}
.header_navbar_right-box {
  position: absolute;
  right: 10px;
  top: 40px;
  z-index: 2;
}
@media (min-width: 576px) {
  .header_navbar_right-box {
    right: 20px;
  }
}
@media (min-width: 992px) {
  .header_navbar_right-box {
    right: 30px;
  }
}
@media (min-width: 1200px) {
  .header_navbar_right-box {
    right: 41px;
  }
}
@media (min-width: 1400px) {
  .header_navbar_right-box {
    right: 123px;
  }
}
.header_navbar_social-m {
  display: flex;
  column-gap: 10px;
}
@media (min-width: 992px) {
  .header_navbar_social-m {
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }
}
.header_navbar_social-m-item a {
  color: #000;
  font-size: 18px;
}
@media (min-width: 576px) {
  .header_navbar_social-m-item a {
    font-size: 22px;
  }
}
.header_navbar_social-m-item.telegram-icon a {
  color: #229ed9;
}
.header_navbar_social-m-item.whatsapp-icon a {
  color: #25d366;
  font-size: 20px;
}
@media (min-width: 576px) {
  .header_navbar_social-m-item.whatsapp-icon a {
    font-size: 24px;
  }
}
.header_navbar_social-m-item.facebook-icon a {
  color: #4267b2;
}
.header_navbar_phone {
  display: none;
}
@media (min-width: 992px) {
  .header_navbar_phone {
    display: block;
    margin-bottom: 23px;
  }
  .header_navbar_phone .header_navbar_phone-icon {
    width: 17px;
    height: 17px;
    background: #bf7246;
    color: #fff;
    border-radius: 3px;
    margin: 3px 5px 0 0;
  }
  .header_navbar_phone a {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 117.6%;
    text-decoration: none;
    letter-spacing: 0.005em;
    color: #bf7246;
  }
}
.btn-logo-and-mobile {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 20px 0;
}
@media (min-width: 768px) {
  .btn-logo-and-mobile {
    padding: 10px 0 22px 0;
  }
}
.btn-logo-and-mobile .header_navbar_logo_mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
@media (min-width: 992px) {
  .btn-logo-and-mobile .header_navbar_logo_mobile {
    display: none;
  }
}
.btn-logo-and-mobile .header_navbar_logo_mobile .header_navbar_logo_box {
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 4px;
  display: inline-block;
  padding: 3px;
  width: 85px;
  height: 85px;
}
@media (min-width: 768px) {
  .btn-logo-and-mobile .header_navbar_logo_mobile .header_navbar_logo_box {
    width: 121px;
    height: 121px;
  }
}
.btn-logo-and-mobile .header_navbar_logo_mobile .header_navbar_logo_text {
  font-size: 15px;
  text-transform: uppercase;
  color: #cc5a1a;
  font-weight: bold;
  margin-top: 15px;
}
@media (min-width: 992px) {
  .btn-logo-and-mobile .header_navbar_btn_mobile {
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 100px;
  }
}
.btn-logo-and-mobile .header_navbar_btn_mobile button {
  font-size: 13px;
  background: #bf7246;
  color: #fff;
  border: none;
  outline: none;
  padding: 7px;
  border-radius: 4px;
}
@media (min-width: 400px) {
  .btn-logo-and-mobile .header_navbar_btn_mobile button {
    padding: 8px 14px;
    font-size: 14px;
  }
}
@media (min-width: 992px) {
  .btn-logo-and-mobile .header_navbar_btn_mobile button {
    min-height: 40px;
    font-size: 17px;
  }
}
.header_bread {
  display: flex;
  align-items: center;
  padding: 15px 0;
  column-gap: 10px;
}
.header_bread a {
  color: #cdcdcd;
  font-weight: 200;
  font-size: 15px;
}
.header-fixed {
  position: fixed;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: rgba(1, 1, 1, 0.3) 1px 7px 10px;
  z-index: -3;
  opacity: 0;
  transition: 0.4s;
}
.header-fixed.active {
  opacity: 1;
  z-index: 23;
  transition: 0.4s;
}
@media (min-width: 992px) {
  .header-fixed .menu-icon__in-fixed {
    display: none;
  }
}
.header-fixed .logo-section {
  display: none;
}
@media (min-width: 992px) {
  .header-fixed .logo-section {
    display: flex;
    align-items: center;
  }
}
.header-fixed .logo-section .logo-img {
  width: 50px;
  height: 50px;
}
.header-fixed .logo-section .logo-text {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-transform: uppercase;
  color: #f27648;
}
.header-fixed .menu-section {
  display: none;
}
@media (min-width: 992px) {
  .header-fixed .menu-section {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-fixed .menu-section a {
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 18px;
  }
}
.header-fixed .fixed-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
}
.header-fixed .menu-icon-in-fixed {
  padding: 10px 10px 10px 0;
}
@media (min-width: 992px) {
  .header-fixed .menu-icon-in-fixed {
    display: none;
  }
}
@media (min-width: 768px) {
  .header-fixed .menu-icon-in-fixed .menu-icon {
    font-size: 22px;
  }
}
.header-fixed .to-book-btn {
  border: none;
  background: #bf7246;
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  min-width: 110px;
  min-height: 30px;
}
@media (min-width: 768px) {
  .header-fixed .to-book-btn {
    min-width: 130px;
    height: 35px;
    font-size: 15px;
  }
}
.header-fixed .tel-me-btn {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #bf7246;
  text-decoration: none;
}
.header-fixed .tel-me-btn .icon {
  width: 20px;
  height: 20px;
  color: #fff;
  background: #bf7246;
  border-radius: 4px;
}
#first-utp {
  padding: 25px 0;
}
@media (min-width: 992px) {
  #first-utp {
    padding: 35px 0;
  }
}
#first-utp .first-utp-item {
  padding: 15px 15px 15px 15px;
  display: flex;
  align-items: center;
}
@media (min-width: 768px) {
  #first-utp .first-utp-item {
    padding: 0;
    justify-content: space-between;
  }
}
@media (min-width: 1200px) {
  #first-utp .first-utp-item {
    padding: 16px 0;
    justify-content: flex-start;
  }
}
#first-utp .first-utp-img .first-utp-img-box {
  position: relative;
  width: 45px;
  height: 55px;
}
@media (min-width: 360px) {
  #first-utp .first-utp-img .first-utp-img-box {
    width: 55px;
  }
}
@media (min-width: 576px) {
  #first-utp .first-utp-img .first-utp-img-box {
    width: 67px;
    height: 80px;
  }
}
@media (min-width: 576px) {
  #first-utp .first-utp-img .first-utp-img-box {
    width: 58px;
  }
}
@media (min-width: 992px) {
  #first-utp .first-utp-img .first-utp-img-box {
    width: 75px;
    height: 90px;
  }
}
@media (min-width: 1200px) {
  #first-utp .first-utp-img .first-utp-img-box {
    width: 78px;
  }
}
#first-utp .first-utp-text {
  padding: 0px 20px;
  max-width: 440px;
  width: 100%;
}
@media (min-width: 768px) {
  #first-utp .first-utp-text {
    max-width: 550px;
    padding: 0;
    margin: 0 10px 0 10px;
  }
}
@media (min-width: 992px) {
  #first-utp .first-utp-text {
    margin: 20px 0px 20px 20px;
  }
}
@media (min-width: 1200px) {
  #first-utp .first-utp-text {
    margin: 0;
    padding: 20px 0px 20px 0px;
    max-width: 490px;
  }
}
@media (min-width: 1400px) {
  #first-utp .first-utp-text {
    padding-left: 20px;
  }
}
#first-utp .first-utp-text h2 {
  font-size: 15px;
  line-height: 21px;
  font-weight: 500;
  text-transform: uppercase;
  color: #000;
}
@media (min-width: 576px) {
  #first-utp .first-utp-text h2 {
    font-size: 19px;
    line-height: 24px;
    padding-left: 10px;
    letter-spacing: 0.4px;
  }
}
@media (min-width: 768px) {
  #first-utp .first-utp-text h2 {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.01071em;
  }
}
@media (min-width: 992px) {
  #first-utp .first-utp-text h2 {
    font-size: 21px;
    font-weight: 600;
  }
}
@media (min-width: 1200px) {
  #first-utp .first-utp-text h2 {
    font-size: 30px;
    font-weight: bold;
    line-height: 37px;
    padding-right: 30px;
  }
}
@media (min-width: 1400px) {
  #first-utp .first-utp-text h2 {
    padding-right: 65px;
  }
}
#second-utp .second-utp-title h2 {
  font-weight: bold;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #cc5a1a;
  text-align: center;
  margin-bottom: 52px;
}
@media (min-width: 320px) {
  #second-utp .second-utp-title h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-title h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-title h2 {
    font-size: 32px;
    margin-bottom: 38px;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-title h2 {
    font-size: 35px;
    margin-bottom: 45px;
  }
}
@media (min-width: 1200px) {
  #second-utp .second-utp-title h2 {
    margin-bottom: 52px;
  }
}
#second-utp .second-utp-item {
  display: flex;
  padding-bottom: 30px;
}
@media (min-width: 320px) {
  #second-utp .second-utp-item {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-item {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-item {
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
}
@media (min-width: 320px) {
  #second-utp .second-utp-item.display-none {
    display: none;
  }
}
@media (min-width: 769px) {
  #second-utp .second-utp-item.display-none {
    display: flex;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-item.mR {
    margin-right: 0;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-item.mR {
    margin-right: 24px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-item.mL {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-item.mL {
    margin-left: 24px;
  }
}
#second-utp .second-utp-item-img .second-utp-item-img-box {
  position: relative;
}
@media (min-width: 320px) {
  #second-utp .second-utp-item-img .second-utp-item-img-box {
    width: 230px;
    height: 230px;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-item-img .second-utp-item-img-box {
    width: 230px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-item-img .second-utp-item-img-box {
    width: 236.3px;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-item-img .second-utp-item-img-box {
    width: 230px;
  }
}
@media (min-width: 1200px) {
  #second-utp .second-utp-item-img .second-utp-item-img-box {
    width: 253px;
  }
}
#second-utp .second-utp-description {
  width: 363.71px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
@media (min-width: 320px) {
  #second-utp .second-utp-description {
    width: 100%;
    box-shadow: none;
    height: auto;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-description {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    min-height: 230px;
    width: 310px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-description {
    width: 483px;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-description {
    width: 226px;
  }
}
@media (min-width: 1200px) {
  #second-utp .second-utp-description {
    width: 363.71px;
  }
}
#second-utp .second-utp-description .second-utp-text-1 h3 {
  height: 59.35px;
  font-weight: bold;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
  padding-top: 9.89px;
  padding-left: 13.36px;
}
@media (min-width: 320px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 16px;
    min-height: 40.35px;
    text-align: center;
    padding-left: 0;
  }
}
@media (min-width: 400px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 17.8px;
    min-height: 40.35px;
    text-align: center;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 18px;
    min-height: 59.35px;
    text-align: left;
    padding-left: 13.36px;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 16px;
    min-height: 50.35px;
  }
}
@media (min-width: 1200px) {
  #second-utp .second-utp-description .second-utp-text-1 h3 {
    font-size: 20px;
    min-height: 59.35px;
  }
}
#second-utp .second-utp-description .second-utp-text-2 p {
  font-weight: 300;
  font-size: 17px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
  height: 133.55px;
  padding: 0 11.07px 24.45px 12.01px;
}
@media (min-width: 320px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 15px;
    text-align: justify;
    height: auto;
  }
}
@media (min-width: 400px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 16.5px;
  }
}
@media (min-width: 576px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 16px;
    text-align: left;
    line-height: 137.6%;
  }
}
@media (min-width: 768px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 17px;
  }
}
@media (min-width: 992px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 15px;
    line-height: 127.6%;
  }
}
@media (min-width: 1200px) {
  #second-utp .second-utp-description .second-utp-text-2 p {
    font-size: 17px;
    line-height: 137.6%;
  }
}
#third-utp .third-utp-title h2 {
  font-weight: bold;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #cc5a1a;
  text-align: center;
  margin-bottom: 52px;
}
@media (min-width: 320px) {
  #third-utp .third-utp-title h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-title h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-title h2 {
    font-size: 32px;
    margin-bottom: 38px;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-title h2 {
    font-size: 35px;
    margin-bottom: 45px;
  }
}
@media (min-width: 1200px) {
  #third-utp .third-utp-title h2 {
    margin-bottom: 52px;
  }
}
#third-utp .third-utp-item {
  display: flex;
  padding-bottom: 30px;
}
@media (min-width: 320px) {
  #third-utp .third-utp-item {
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-item {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-item {
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
}
@media (min-width: 320px) {
  #third-utp .third-utp-item.display-none {
    display: none;
  }
}
@media (min-width: 769px) {
  #third-utp .third-utp-item.display-none {
    display: flex;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-item.mR {
    margin-right: 0;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-item.mR {
    margin-right: 24px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-item.mL {
    margin-left: 0;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-item.mL {
    margin-left: 24px;
  }
}
#third-utp .third-utp-item-img .third-utp-item-img-box {
  position: relative;
}
@media (min-width: 320px) {
  #third-utp .third-utp-item-img .third-utp-item-img-box {
    width: 230px;
    height: 230px;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-item-img .third-utp-item-img-box {
    width: 230px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-item-img .third-utp-item-img-box {
    width: 236.3px;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-item-img .third-utp-item-img-box {
    width: 230px;
  }
}
@media (min-width: 1200px) {
  #third-utp .third-utp-item-img .third-utp-item-img-box {
    width: 253px;
  }
}
#third-utp .third-utp-description {
  width: 363.71px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
@media (min-width: 320px) {
  #third-utp .third-utp-description {
    width: 100%;
    box-shadow: none;
    height: auto;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-description {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    min-height: 230px;
    width: 310px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-description {
    width: 483px;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-description {
    width: 226px;
  }
}
@media (min-width: 1200px) {
  #third-utp .third-utp-description {
    width: 363.71px;
  }
}
#third-utp .third-utp-description .third-utp-text-1 h3 {
  height: 59.35px;
  font-weight: bold;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
  padding-top: 9.89px;
  padding-left: 13.36px;
}
@media (min-width: 320px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 16px;
    min-height: 40.35px;
    text-align: center;
    padding-left: 0;
  }
}
@media (min-width: 400px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 17.8px;
    min-height: 40.35px;
    text-align: center;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 18px;
    min-height: 59.35px;
    text-align: left;
    padding-left: 13.36px;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 16px;
    min-height: 50.35px;
  }
}
@media (min-width: 1200px) {
  #third-utp .third-utp-description .third-utp-text-1 h3 {
    font-size: 20px;
    min-height: 59.35px;
  }
}
#third-utp .third-utp-description .third-utp-text-2 p {
  font-weight: 300;
  font-size: 17px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
  height: 133.55px;
  padding: 0 11.07px 24.45px 12.01px;
}
@media (min-width: 320px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 15px;
    text-align: justify;
    height: auto;
  }
}
@media (min-width: 400px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 16.5px;
  }
}
@media (min-width: 576px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 16px;
    text-align: left;
    line-height: 137.6%;
  }
}
@media (min-width: 768px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 17px;
  }
}
@media (min-width: 992px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 15px;
    line-height: 127.6%;
  }
}
@media (min-width: 1200px) {
  #third-utp .third-utp-description .third-utp-text-2 p {
    font-size: 17px;
    line-height: 137.6%;
  }
}
#tour-program .tour-program-title h2 {
  font-weight: bold;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #cc5a1a;
  text-align: center;
  margin-bottom: 52px;
}
@media (min-width: 320px) {
  #tour-program .tour-program-title h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }
}
@media (min-width: 576px) {
  #tour-program .tour-program-title h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #tour-program .tour-program-title h2 {
    font-size: 32px;
    margin-bottom: 38px;
  }
}
@media (min-width: 992px) {
  #tour-program .tour-program-title h2 {
    font-size: 35px;
    margin-bottom: 45px;
  }
}
@media (min-width: 1200px) {
  #tour-program .tour-program-title h2 {
    margin-bottom: 52px;
  }
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-title {
  font-size: 17px;
  font-weight: 500;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #323429;
  border-bottom: 1px solid #323429;
  padding: 15px 0;
  position: relative;
  padding-right: 15px;
  cursor: pointer;
}
@media (min-width: 992px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-title {
    font-size: 20px;
  }
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-title
  b {
  margin-right: 5px;
  color: black;
  font-weight: bold;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-title
  .arrow-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transition: 0.4s;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-title
  .arrow-btn.active {
  transform: rotate(180deg);
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description {
  padding: 12px 0;
  overflow: hidden;
  display: none;
  transition: all 0.5s;
  max-height: 0;
  opacity: 0;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description.active {
  display: flex;
  transition: all 0.5s;
  flex-direction: column;
  opacity: 1;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-texts {
  padding-bottom: 10px;
  padding-left: 28px;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-texts
  li {
  font-weight: 300;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
  margin: 7px 0;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-images {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
}
@media (min-width: 992px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-description
    .tour-program-list-images {
    flex-direction: row;
    column-gap: 20px;
  }
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-images
  li {
  position: relative;
  min-width: 266px;
  width: 100%;
  height: 200px;
  list-style: none;
  margin-bottom: 10px;
}
@media (min-width: 576px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-description
    .tour-program-list-images
    li {
    max-width: 300px;
    margin-bottom: 15px;
  }
}
@media (min-width: 768px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-description
    .tour-program-list-images
    li {
    max-width: 420px;
  }
}
@media (min-width: 1200px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-description
    .tour-program-list-images
    li {
    max-width: 358px;
    height: 250px;
  }
}
@media (min-width: 1400px) {
  #tour-program
    .tour-program-list
    .tour-program-list-item
    .tour-program-list-description
    .tour-program-list-images
    li {
    max-width: 420px;
  }
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-footer
  p {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
  text-align: center;
  margin-top: 25px;
}
#tour-program
  .tour-program-list
  .tour-program-list-item
  .tour-program-list-description
  .tour-program-list-footer
  p
  label {
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 7px;
}
#action-detail {
  background: rgba(191, 114, 70, 0.3);
  margin: 15px 0;
  padding: 0 0 20px 0;
}
@media (min-width: 768px) {
  #action-detail .content {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}
@media (min-width: 768px) {
  #action-detail .content .content-left {
    width: 80%;
  }
}
@media (min-width: 1200px) {
  #action-detail .content .content-left {
    width: 77%;
  }
}
@media (min-width: 1200px) {
  #action-detail .content .content-left {
    width: 70%;
  }
}
@media (min-width: 768px) {
  #action-detail .content .content-right {
    width: 20%;
  }
}
@media (min-width: 1200px) {
  #action-detail .content .content-right {
    width: 23%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
@media (min-width: 1400px) {
  #action-detail .content .content-right {
    width: 30%;
  }
}
#action-detail .action_detail_title {
  font-size: 22px;
  font-weight: 500;
  padding: 20px 0 7px 0;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
}
@media (min-width: 920px) {
  #action-detail .action_detail_title {
    font-size: 25px;
    font-weight: 600;
  }
}
@media (min-width: 1200px) {
  #action-detail .action_detail_title {
    font-size: 32px;
  }
}
#action-detail .action_detail_info {
  font-size: 16px;
  font-weight: 500;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: black;
  padding-bottom: 20px;
}
@media (min-width: 576px) {
  #action-detail .action_detail_info {
    padding-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #action-detail .action_detail_info {
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  #action-detail .action_detail_info {
    font-size: 21px;
  }
}
@media (min-width: 1200px) {
  #action-detail .action_detail_info {
    font-size: 25px;
  }
}
#action-detail .action_detail_btn {
  outline: none;
  padding: 12px;
  font-size: 15px;
  border-radius: 4px;
  border: none;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #fffbfb;
  background: #bf7246;
  cursor: pointer;
  font-weight: bold;
}
@media (min-width: 768px) {
  #action-detail .action_detail_btn {
    padding: 15px 5px;
    min-width: 150px;
  }
}
@media (min-width: 992px) {
  #action-detail .action_detail_btn {
    padding: 20px 5px;
    margin-top: 20px;
    min-width: 190px;
    font-size: 18px;
    border-radius: 7px;
  }
}
@media (min-width: 1200px) {
  #action-detail .action_detail_btn {
    font-size: 30px;
    padding: 35px 20px;
    min-width: 100%;
  }
}
#price .content {
  padding-top: 65px;
}
#price .price-title {
  font-weight: bold;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
  font-size: 22px;
  text-align: center;
}
@media (min-width: 768px) {
  #price .price-title {
    font-size: 35px;
  }
}
#price .price-info {
  margin-top: 20px;
  font-weight: 500;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
  font-size: 16px;
  text-align: center;
}
@media (min-width: 768px) {
  #price .price-info {
    font-size: 22px;
  }
}
#price .price-list {
  padding: 20px 0 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
@media (min-width: 768px) {
  #price .price-list {
    align-items: center;
  }
}
#price .price-list .price-list-item {
  min-height: 50px;
  border: 1px solid #bf7246;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  #price .price-list .price-list-item {
    width: 70%;
  }
}
#price .price-list .price-list-item p {
  font-weight: 500;
  text-align: center;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
  font-size: 16px;
}
@media (min-width: 768px) {
  #price .price-list .price-list-item p {
    font-size: 20px;
  }
}
#price .price-list .price-list-item p b {
  display: block;
}
@media (min-width: 576px) {
  #price .price-list .price-list-item p b {
    display: inline-block;
    padding-right: 5px;
  }
}
@media (min-width: 768px) {
  #rate .rate-header-list {
    display: none;
  }
}
#rate .header-list .header-list-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 20px 10px;
  color: #fff;
  margin: 10px 0;
  font-weight: 700;
  cursor: pointer;
  font-size: 20px;
  letter-spacing: 0.4px;
}
#rate .header-list:nth-child(1) .header-list-btn {
  background-color: #f19b2f;
}
#rate .header-list:nth-child(2) .header-list-btn {
  background-color: #bf7246;
}
#rate .header-list:nth-child(3) .header-list-btn {
  background-color: #d35400;
}
#rate .header-list .header-list-modal .rate-list-item {
  position: relative;
}
#rate .header-list .header-list-modal .rate-list-item .rate-list-item-title {
  font-size: 16px;
  position: relative;
  width: 100%;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px 20px 10px;
  height: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .excl {
  margin: 5px 0 0 10px;
  position: absolute;
  font-size: 16px;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .bs_check {
  position: absolute;
  right: 10px;
  top: 15px;
  background-color: #f19b2f;
  color: #fff;
  border-radius: 50%;
  padding: 2px;
  font-size: 20px;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .last-icons {
  position: absolute;
  right: 10px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3px;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .last-icons
  .icon {
  color: #fff;
  border-radius: 50%;
  padding: 2px;
  font-size: 20px;
  background: #000;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .last-icons
  .icon.active {
  background-color: #f19b2f;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .rate-list-item-descript {
  position: absolute;
  color: #000;
  display: none;
  top: 45px;
  left: 40px;
  z-index: 2;
  z-index: 22;
  padding: 10px;
  border-radius: 5px;
  max-width: 220px;
  box-shadow: #ccc 1px 1px 10px 2px;
  background-color: #fff;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title
  .rate-list-item-descript.active {
  display: none;
}
#rate
  .header-list
  .header-list-modal
  .rate-list-item
  .rate-list-item-title:hover
  .rate-list-item-descript {
  display: block !important;
}
#rate .rate-header-list-table {
  display: none;
  padding: 20px 10px 10px 10px;
}
@media (min-width: 768px) {
  #rate .rate-header-list-table {
    display: block;
  }
}
#rate .rate-header-list-table .list-table-tr {
  padding: 5px;
  font-weight: 400;
  font-size: 22px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.4fr 0.2fr 0.2fr 0.2fr;
  font-size: 16px;
  position: relative;
  width: 100%;
  font-weight: 500;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px 20px 10px;
  height: auto;
  cursor: pointer;
  position: relative;
}
#rate .rate-header-list-table .list-table-tr .rate-list-item-descript {
  position: absolute;
  color: #000;
  display: none;
  top: 45px;
  left: 40px;
  z-index: 2;
  z-index: 22;
  padding: 10px;
  border-radius: 5px;
  max-width: 220px;
  box-shadow: #ccc 1px 1px 10px 2px;
  background-color: #fff;
}
#rate .rate-header-list-table .list-table-tr .rate-list-item-descript.active {
  display: none;
}
#rate .rate-header-list-table .list-table-tr:hover .rate-list-item-descript {
  display: block !important;
}
#rate .rate-header-list-table .list-table-tr .excl {
  margin: 5px 0 0 10px;
  font-size: 16px;
}
#rate .rate-header-list-table .list-table-tr .bs_check {
  right: 10px;
  top: 15px;
  background-color: #f19b2f;
  color: #fff;
  border-radius: 50%;
  padding: 2px;
  font-size: 20px;
}
#rate .rate-header-list-table .list-table-tr .last-icons {
  right: 10px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3px;
}
#rate .rate-header-list-table .list-table-tr .last-icons .icon {
  color: #fff;
  border-radius: 50%;
  padding: 2px;
  font-size: 20px;
  background: #000;
}
#rate .rate-header-list-table .list-table-tr .last-icons .icon.active {
  background-color: #f19b2f;
}
#rate .rate-header-list-table .list-table-tr b {
  font-weight: 700;
}
#rate .rate-header-list-table .list-table-tr.fist-item {
  background: rgba(191, 114, 70, 0.1);
  border-bottom: 1px solid #1e1e1e;
  font-size: 20px;
  align-items: center;
  justify-content: flex-start;
}
@media (min-width: 992px) {
  #rate .rate-header-list-table .list-table-tr.fist-item {
    font-size: 25px;
  }
}
#rate .rate-header-list-table .list-table-tr.fist-item .list-table-th {
  flex-direction: column;
}
#rate .rate-header-list-table .list-table-tr .list-table-th {
  display: flex;
  align-items: center;
  position: relative;
}
#rate .rate-header-list-table .list-table-tr .list-table-th.jcc {
  justify-content: center;
}
#rate .content-2 .prices_footer {
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: black;
  padding: 30px 0;
}
#rate .content-2 .rate_footer_head {
  font-size: 18px;
  text-align: center;
  padding-bottom: 20px;
  margin-top: 10px;
}
@media (min-width: 768px) {
  #rate .content-2 .rate_footer_head {
    font-size: 25px;
  }
}
#rate .content-2 .rate_footer_title {
  font-size: 16px;
}
@media (min-width: 768px) {
  #rate .content-2 .rate_footer_title {
    font-size: 23px;
  }
}
#rate .content-2 .rate_footer_list {
  padding-left: 20px;
}
#rate .content-2 .rate_footer_list .rate_footer_list_item {
  font-size: 14px;
  padding: 5px 0;
  line-height: 1.1;
  color: rgba(0, 0, 0, 0.87);
}
@media (min-width: 768px) {
  #rate .content-2 .rate_footer_list .rate_footer_list_item {
    font-size: 17px;
  }
}
#action-picture .action-picture-btn {
  text-align: center;
  padding: 25px 0;
}
@media (min-width: 992px) {
  #action-picture .action-picture-btn {
    padding: 30px 0;
  }
}
#action-picture .action-picture-btn button {
  outline: none;
  border: none;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: white;
  background: #bf7246;
  border-radius: 10px;
  font-weight: 500;
  min-width: 200px;
  font-size: 25px;
  min-height: 60px;
  margin-bottom: 0px;
}
@media (min-width: 768px) {
  #action-picture .action-picture-btn button {
    font-size: 30px;
    min-width: 350px;
    min-height: 60px;
  }
}
@media (min-width: 992px) {
  #action-picture .action-picture-btn button {
    font-size: 35px;
    min-width: 400px;
    min-height: 80px;
  }
}
#action-picture .wrapper-content {
  background-color: #bf7246;
}
@media (min-width: 768px) {
  #action-picture .wrapper-content .container {
    display: flex;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
@media (min-width: 992px) {
  #action-picture .wrapper-content .container {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }
}
#action-picture .wrapper-content .content-left .content-left-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: white;
  padding: 30px 0 10px 0;
}
@media (min-width: 576px) {
  #action-picture .wrapper-content .content-left .content-left-title {
    font-size: 22px;
    font-weight: 500;
    padding-top: 20px;
  }
}
@media (min-width: 768px) {
  #action-picture .wrapper-content .content-left .content-left-title {
    padding-top: 50px;
  }
}
@media (min-width: 992px) {
  #action-picture .wrapper-content .content-left .content-left-title {
    font-size: 25px;
    font-weight: 600;
  }
}
@media (min-width: 1200px) {
  #action-picture .wrapper-content .content-left .content-left-title {
    font-size: 32px;
    font-weight: 600;
  }
}
@media (min-width: 1400px) {
  #action-picture .wrapper-content .content-left .content-left-title {
    font-size: 33px;
  }
}
#action-picture .wrapper-content .content-left .content-left-descript {
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: white;
  max-width: 718px;
  font-weight: 500;
  font-size: 14px;
  padding-bottom: 20px;
}
@media (min-width: 576px) {
  #action-picture .wrapper-content .content-left .content-left-descript {
    font-size: 18px;
  }
}
@media (min-width: 768px) {
  #action-picture .wrapper-content .content-left .content-left-descript {
    padding-bottom: 40px;
  }
}
@media (min-width: 992px) {
  #action-picture .wrapper-content .content-left .content-left-descript {
    font-size: 23px;
  }
}
@media (min-width: 1200px) {
  #action-picture .wrapper-content .content-left .content-left-descript {
    font-size: 27px;
  }
}
@media (min-width: 1400px) {
  #action-picture .wrapper-content .content-left .content-left-descript {
    font-size: 30px;
  }
}
@media (min-width: 768px) {
  #action-picture .wrapper-content .content-left {
    width: 60%;
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
@media (min-width: 992px) {
  #action-picture .wrapper-content .content-left {
    padding-left: 30px;
    padding-left: 15px;
  }
}
@media (min-width: 1400px) {
  #action-picture .wrapper-content .content-left {
    padding-left: 0px;
    justify-content: center;
  }
}
@media (min-width: 768px) {
  #action-picture .wrapper-content .content-left .content {
    max-width: 450px;
  }
}
@media (min-width: 992px) {
  #action-picture .wrapper-content .content-left .content {
    max-width: 566px;
  }
}
@media (min-width: 1200px) {
  #action-picture .wrapper-content .content-left .content {
    max-width: 678px;
  }
}
@media (min-width: 1400px) {
  #action-picture .wrapper-content .content-left .content {
    max-width: 736px;
  }
}
#action-picture .content-right {
  display: none;
  width: 40%;
}
@media (min-width: 768px) {
  #action-picture .content-right {
    display: block;
  }
}
#action-picture .content-right .img-box {
  position: relative;
  height: 100%;
  width: 100%;
  transform: translateX(12px);
}
#gallery-wrapper {
  padding-top: 50px;
  padding-bottom: 20px;
}
#gallery-wrapper .yashirish {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-weight: 600;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-decoration-line: underline;
  color: #cc5a1a;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
}
#gallery-wrapper .yashirish.display-none {
  display: none;
}
#gallery-wrapper .container {
  margin: 0 auto;
}
#gallery-wrapper .container .urta {
  display: flex;
  justify-content: center;
}
@media (min-width: 320px) {
  #gallery-wrapper .container {
    padding: 0 15px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .container {
    padding: 0;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .container {
    max-width: 735px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .container {
    max-width: 1180px;
  }
}
@media (min-width: 1300px) {
  #gallery-wrapper .container {
    max-width: 1250px;
  }
}
#gallery-wrapper .content-1 {
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 {
    align-items: center;
    padding-top: 100px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 {
    padding-top: 100px;
    align-items: flex-start;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 {
    padding-top: 0;
  }
}
#gallery-wrapper .content-1 h3 {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-weight: bold;
  font-size: 38px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #cc5a1a;
  width: 563px;
  height: 180px;
  position: absolute;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 h3 {
    width: auto;
    height: auto;
    font-size: 18px;
    top: 0px;
    padding: 0 10px;
    text-align: center;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 h3 {
    width: auto;
    height: auto;
    font-size: 23px;
    top: 0;
    padding: 0;
    text-align: center;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 h3 {
    width: 365px;
    height: 109px;
    font-size: 29px;
    text-align: left;
    line-height: 137.6%;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 h3 {
    width: 465px;
    height: 144px;
    font-size: 32px;
    line-height: 117.6%;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 h3 {
    width: 563px;
    height: 180px;
    font-size: 38px;
  }
}
#gallery-wrapper .content-1 .section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 320px started */
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 .section-1 {
    align-items: center;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 .section-1 {
    flex-direction: row;
    align-items: flex-start;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 .section-1 {
    flex-direction: column;
  }
}
#gallery-wrapper .content-1 .section-2 {
  display: flex;
  align-items: flex-end;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 .section-2 {
    align-items: center;
    flex-direction: column;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 .section-2 {
    align-items: flex-end;
    flex-direction: row;
  }
}
#gallery-wrapper .content-1 .box {
  display: flex;
  flex-direction: column;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 .box {
    align-items: center;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 .box {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 .box {
    flex-direction: column;
  }
}
#gallery-wrapper .content-1 .box-img {
  display: flex;
  align-items: flex-end;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 .box-img {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 .box-img {
    flex-direction: column;
    align-items: center;
    display: flex;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 .box-img {
    flex-direction: row;
    align-items: flex-end;
  }
}
#gallery-wrapper .content-1 .div-box {
  overflow: hidden;
}
#gallery-wrapper .content-1 img {
  width: 100%;
  height: 100%;
  transition: 2s;
  object-fit: cover;
}
#gallery-wrapper .content-1 img:hover {
  transition: 2s;
  transform: scale(1.2);
}
#gallery-wrapper .content-1 div.img {
  margin: 5px;
  cursor: pointer;
  position: relative;
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img {
    margin: 1px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img {
    margin: 3px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img {
    margin: 4px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img {
    margin: 5px;
  }
}
#gallery-wrapper .content-1 div.img-1 {
  width: 328px;
  height: 159px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 div.img-1 {
    width: 310px;
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img-1 {
    width: 250px;
    height: 250px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img-1 {
    width: 213px;
    height: 95px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img-1 {
    width: 274px;
    height: 127px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img-1 {
    width: 328px;
    height: 159px;
  }
}
#gallery-wrapper .content-1 div.img-2 {
  width: 280px;
  height: 343px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 div.img-2 {
    width: 310px;
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img-2 {
    width: 250px;
    height: 250px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img-2 {
    width: 181px;
    height: 228px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img-2 {
    width: 234px;
    height: 274px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img-2 {
    width: 280px;
    height: 343px;
  }
}
#gallery-wrapper .content-1 div.img-3 {
  width: 502px;
  height: 513px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 div.img-3 {
    width: 310px;
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img-3 {
    width: 250px;
    height: 250px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img-3 {
    width: 330px;
    height: 404px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img-3 {
    width: 421px;
    height: 410px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img-3 {
    width: 502px;
    height: 513px;
  }
}
#gallery-wrapper .content-1 div.img-4 {
  width: 328px;
  height: 324px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 div.img-4 {
    width: 310px;
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img-4 {
    width: 250px;
    height: 250px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img-4 {
    width: 213px;
    height: 201px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img-4 {
    width: 274px;
    height: 259px;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img-4 {
    width: 328px;
    height: 324px;
  }
}
#gallery-wrapper .content-1 div.img-5 {
  width: 792px;
  height: 215px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-1 div.img-5 {
    width: 310px;
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-1 div.img-5 {
    width: 503px;
    height: 250px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-1 div.img-5 {
    width: 517px;
    height: 131px;
  }
  #gallery-wrapper .content-1 div.img-5 img {
    object-fit: cover;
    object-position: center 50%;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-1 div.img-5 {
    width: 665px;
    /* width: 633px; */
    height: 172px;
    object-position: 50% 10%;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-1 div.img-5 {
    width: 792px;
    height: 215px;
    object-position: 50% 10%;
  }
}
#gallery-wrapper .content-2 {
  display: grid;
  height: 500px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'img1 img1 img2 img3' 'img1 img1 img4 img5';
  grid-gap: 5px;
  max-width: 1130px;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-2 {
    width: 310px;
    display: grid;
    height: 100%;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 'img1' 'img2' 'img3' 'img4' 'img5';
    grid-gap: 10px;
    padding-top: 5px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-2 {
    display: grid;
    height: 500px;
    grid-template-columns: repeat(2, 1fr);
    width: 93%;
    padding-top: 0;
    grid-template-areas: 'img1 img1' 'img1 img1' 'img2 img3' 'img4 img5';
    grid-gap: 3px;
  }
}
@media (min-width: 768px) {
  #gallery-wrapper .content-2 {
    display: grid;
    height: 400px;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'img1 img1 img2 img3' 'img1 img1 img4 img5';
    grid-gap: 5px;
    max-width: 1130px;
  }
}
@media (min-width: 992px) {
  #gallery-wrapper .content-2 {
    padding: 0 7px;
    height: 500px;
    width: 100%;
  }
}
@media (min-width: 1200px) {
  #gallery-wrapper .content-2 {
    padding: 0;
    width: 100%;
  }
}
#gallery-wrapper .content-2 article {
  overflow: hidden;
}
@media (min-width: 320px) {
  #gallery-wrapper .content-2 article {
    height: 310px;
  }
}
@media (min-width: 576px) {
  #gallery-wrapper .content-2 article {
    height: auto;
  }
}
#gallery-wrapper .content-2 article:nth-child(1) {
  grid-area: img1;
}
#gallery-wrapper .content-2 article:nth-child(2) {
  grid-area: img2;
}
#gallery-wrapper .content-2 article:nth-child(3) {
  grid-area: img3;
}
#gallery-wrapper .content-2 article:nth-child(4) {
  grid-area: img4;
}
#gallery-wrapper .content-2 article:nth-child(5) {
  grid-area: img5;
}
#gallery-wrapper .content-2 img {
  width: 100%;
  height: 100%;
  transition: 2s;
  object-fit: cover;
  cursor: pointer;
}
@media (min-width: 576px) {
  #gallery-wrapper .content-2 img {
    margin: 0;
    width: 100%;
    height: 100%;
  }
}
#gallery-wrapper .content-2 img:hover {
  transition: 2s;
  transform: scale(1.2);
}
#author-wrapper .author-content {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
#author-wrapper .author-title {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
}
#author-wrapper .author-title h1 {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #author-wrapper .author-title h1 {
    font-size: 25px;
    text-align: center;
  }
}
@media (min-width: 768px) {
  #author-wrapper .author-title h1 {
    font-size: 35px;
  }
}
#author-wrapper .author-descript {
  position: relative;
  display: flex;
}
@media (min-width: 320px) {
  #author-wrapper .author-descript {
    flex-direction: column;
    row-gap: 15px;
    column-gap: 0px;
  }
}
@media (min-width: 768px) {
  #author-wrapper .author-descript {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 20px;
  }
}
#author-wrapper .author-image {
  position: relative;
  padding: 15px 20px;
}
#author-wrapper .author-image .image-content {
  position: relative;
  width: 323px;
  height: 431px;
  box-shadow: -20px -15px 1px #bf7246;
}
@media (min-width: 320px) {
  #author-wrapper .author-image .image-content {
    width: 260px;
    height: 360px;
    margin: auto;
    box-shadow: -15px -10px 1px #bf7246;
  }
}
@media (min-width: 768px) {
  #author-wrapper .author-image .image-content {
    width: 245px;
    margin: 0;
    height: 345px;
    box-shadow: -15px -10px 1px #bf7246;
  }
}
@media (min-width: 992px) {
  #author-wrapper .author-image .image-content {
    width: 323px;
    height: 431px;
    box-shadow: -20px -15px 1px #bf7246;
  }
}
#author-wrapper .author-text {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
#author-wrapper .author-text p {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-style: normal;
  font-weight: 500;
  font-size: 18.5px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
#author-wrapper .author-text button {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: #bf7246;
  border-radius: 20px;
  width: 336px;
  height: 71px;
  /* font-family: Akrobat;
   font-display:swap; */
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #ffffff;
}
@media (min-width: 320px) {
  #author-wrapper .author-text {
    row-gap: 0px;
  }
  #author-wrapper .author-text p {
    font-size: 16px;
  }
  #author-wrapper .author-text button {
    margin-top: 20px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    font-size: 20px;
  }
}
@media (min-width: 768px) {
  #author-wrapper .author-text {
    row-gap: 0px;
  }
  #author-wrapper .author-text p {
    font-size: 16px;
  }
  #author-wrapper .author-text button {
    margin-top: 10px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  #author-wrapper .author-text {
    row-gap: 8px;
  }
  #author-wrapper .author-text p {
    font-size: 18.5px;
  }
  #author-wrapper .author-text button {
    margin-top: 0px;
    border-radius: 20px;
    width: 336px;
    font-size: 30px;
    height: 71px;
  }
}
#why-wth-us .content {
  position: relative;
  width: 100%;
  height: auto;
  padding: 50px 0;
}
#why-wth-us .why-wth-us-title {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
}
#why-wth-us .why-wth-us-title h1 {
  /* font-family: "Akrobat", sans-serif; */
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #why-wth-us .why-wth-us-title h1 {
    font-size: 25px;
  }
}
@media (min-width: 768px) {
  #why-wth-us .why-wth-us-title h1 {
    font-size: 35px;
  }
}
#why-wth-us .cards {
  position: relative;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60px;
}
@media (min-width: 320px) {
  #why-wth-us .cards {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 30px;
  }
}
@media (min-width: 992px) {
  #why-wth-us .cards {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 60px;
  }
}
#why-wth-us .card {
  position: relative;
  display: flex;
  column-gap: 20px;
}
@media (min-width: 320px) {
  #why-wth-us .card :nth-child(6) {
    display: none;
  }
}
@media (min-width: 768px) {
  #why-wth-us .card :nth-child(6) {
    display: flex;
  }
}
#why-wth-us .img-card {
  position: relative;
}
#why-wth-us .image-box {
  position: relative;
  width: 90px;
  height: 90px;
}
@media (min-width: 320px) {
  #why-wth-us .image-box {
    width: 70px;
    height: 70px;
  }
}
@media (min-width: 578px) {
  #why-wth-us .image-box {
    width: 90px;
    height: 90px;
  }
}
#why-wth-us .text-box {
  position: relative;
}
#why-wth-us .text-box h1 {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  min-height: 50px;
  font-size: 28px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
#why-wth-us .text-box h4 {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
@media (min-width: 320px) {
  #why-wth-us .text-box h1 {
    font-size: 20px;
    min-height: 30px;
  }
  #why-wth-us .text-box h4 {
    font-size: 16px;
  }
}
@media (min-width: 578px) {
  #why-wth-us .text-box h1 {
    font-size: 28px;
    min-height: 50px;
  }
  #why-wth-us .text-box h4 {
    font-size: 18px;
  }
}
@media (min-width: 1200px) {
  #samele {
    padding-top: 20px;
  }
}
#samele .content {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}
#samele .smale-head-text {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
}
#samele .smale-head-text h1 {
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #samele .smale-head-text h1 {
    font-size: 25px;
    text-align: center;
  }
}
@media (min-width: 768px) {
  #samele .smale-head-text h1 {
    font-size: 35px;
  }
}
#samele .blog {
  position: relative;
  display: flex;
  justify-content: space-between;
}
@media (min-width: 320px) {
  #samele .blog {
    flex-direction: column;
    row-gap: 15px;
    column-gap: 0px;
  }
}
@media (min-width: 768px) {
  #samele .blog {
    flex-direction: row-reverse;
    row-gap: 0px;
    column-gap: 20px;
  }
}
#samele .image-blog {
  position: relative;
  padding: 5px;
}
#samele .image-box {
  position: relative;
}
@media (min-width: 320px) {
  #samele .image-box {
    width: 290px;
    height: 390px;
    margin: auto;
  }
}
#samele .text-box {
  position: relative;
  display: flex;
  width: 50%;
  margin-top: 40px;
  flex-direction: column;
  row-gap: 8px;
}
@media (min-width: 992px) {
  #samele .text-box ul {
    padding-left: 32px;
  }
}
#samele .text-box h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
  margin-bottom: 30px;
}
#samele .text-box p {
  font-style: normal;
  font-weight: 500;
  font-size: 18.5px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
#samele .text-box .li {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18.5px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
@media (min-width: 320px) {
  #samele .text-box {
    width: 100%;
    row-gap: 0px;
  }
  #samele .text-box h1 {
    text-align: center;
  }
  #samele .text-box p {
    font-size: 16px;
  }
  #samele .text-box .li {
    font-size: 16px;
  }
}
@media (min-width: 768px) {
  #samele .text-box {
    width: 60%;
    row-gap: 0px;
  }
  #samele .text-box h1 {
    text-align: left;
  }
  #samele .text-box p {
    font-size: 16px;
  }
  #samele .text-box .li {
    font-size: 16px;
  }
}
@media (min-width: 992px) {
  #samele .text-box {
    width: 60%;
    row-gap: 8px;
  }
  #samele .text-box p {
    font-size: 18.5px;
  }
  #samele .text-box .li {
    font-size: 18px;
  }
}
@media (min-width: 1200px) {
  #samele .text-box p {
    margin-bottom: 16px;
  }
}
#reviews .content {
  position: relative;
  width: 100%;
  height: auto;
  padding: 50px 0 80px;
  padding-top: 75px;
}
@media (min-width: 320px) {
  #reviews .content {
    padding: 50px 0 30px;
    padding-top: 45px;
  }
}
@media (min-width: 540px) {
  #reviews .content {
    padding: 50px 0 80px;
    padding-top: 75px;
  }
}
#reviews .reviews-title {
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
}
#reviews .reviews-title h1 {
  /* font-family: "Akrobat", sans-serif; */
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #reviews .reviews-title h1 {
    font-size: 25px;
  }
}
@media (min-width: 768px) {
  #reviews .reviews-title h1 {
    font-size: 35px;
  }
}
#reviews .cards {
  position: relative;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
@media (min-width: 320px) {
  #reviews .cards {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 30px;
  }
}
@media (min-width: 992px) {
  #reviews .cards {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px 70px;
  }
}
#reviews .cards a {
  text-decoration: none;
}
#reviews .card {
  position: relative;
  display: flex;
  padding: 25px 20px;
  column-gap: 20px;
  width: 100%;
  background: #ffffff;
  cursor: pointer;
  transition: ease-in-out 0.25s;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
}
@media (min-width: 320px) {
  #reviews .card {
    padding: 15px 10px;
  }
}
@media (min-width: 578px) {
  #reviews .card {
    padding: 25px 20px;
  }
}
#reviews .reviews-image {
  position: relative;
}
#reviews .reviews-image .image-box {
  position: relative;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  overflow: hidden;
}
@media (min-width: 320px) {
  #reviews .reviews-image .image-box {
    width: 70px;
    height: 70px;
  }
}
@media (min-width: 578px) {
  #reviews .reviews-image .image-box {
    width: 90px;
    height: 90px;
  }
}
#reviews .reviews-text {
  position: relative;
}
#reviews .reviews-text h1 {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
}
#reviews .reviews-text h4 {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
}
@media (min-width: 320px) {
  #reviews .reviews-text h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  #reviews .reviews-text h4 {
    font-size: 15px;
    min-height: 50px;
  }
}
@media (min-width: 578px) {
  #reviews .reviews-text h1 {
    font-size: 20px;
    margin-bottom: 5px;
  }
  #reviews .reviews-text h4 {
    font-size: 15px;
    min-height: 50px;
  }
}
#benefit {
  padding-bottom: 20px;
}
#benefit .benefit-title {
  position: relative;
}
#benefit .benefit-title h2 {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-style: normal;
  text-align: center;
  font-weight: bold;
  line-height: 117.6%;
  text-align: center;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #benefit .benefit-title h2 {
    font-size: 20px;
  }
}
@media (min-width: 576px) {
  #benefit .benefit-title h2 {
    font-size: 25px;
  }
}
@media (min-width: 992px) {
  #benefit .benefit-title h2 {
    font-size: 35px;
  }
}
#benefit .benefit-wrapper {
  min-width: 320px;
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 50px;
}
#benefit .benefit-wrapper .benefit-text-section {
  position: absolute;
  z-index: 3;
  bottom: 20%;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 576px) {
  #benefit .benefit-wrapper .benefit-text-section {
    left: 0;
    transform: translateX(0);
  }
}
@media (min-width: 992px) {
  #benefit .benefit-wrapper .benefit-text-section {
    width: 600px;
  }
}
@media (min-width: 1200px) {
  #benefit .benefit-wrapper .benefit-text-section {
    left: 10%;
  }
}
#benefit .benefit-wrapper .benefit-text-section h1 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
  color: #000;
}
@media (min-width: 576px) {
  #benefit .benefit-wrapper .benefit-text-section h1 {
    font-size: 24px;
  }
}
@media (min-width: 992px) {
  #benefit .benefit-wrapper .benefit-text-section h1 {
    font-size: 27px;
  }
}
#benefit .benefit-wrapper .benefit-text-section h1 b {
  font-weight: bold;
}
#benefit .benefit-wrapper .benefit-text-section p {
  font-size: 20px;
  text-align: center;
}
@media (min-width: 576px) {
  #benefit .benefit-wrapper .benefit-text-section p {
    font-size: 22px;
  }
}
@media (min-width: 992px) {
  #benefit .benefit-wrapper .benefit-text-section p {
    font-size: 28px;
  }
}
#benefit .action-wrapper {
  background: rgba(191, 114, 70, 0.3);
  box-shadow: 5px 5px 15px rgba(1, 1, 1, 0.6);
}
#benefit .action-wrapper .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (min-width: 320px) {
  #benefit .action-wrapper .content {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 15px;
  }
}
@media (min-width: 576px) {
  #benefit .action-wrapper .content {
    padding: 0;
  }
}
@media (min-width: 768px) {
  #benefit .action-wrapper .content {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
}
#benefit .action-wrapper .content .info p {
  /* font-family: "Akrobat", sans-serif;
   font-display:swap; */
  font-weight: 500;
  margin-top: 50px;
  /* padding: 40px 0; */
  font-size: 30px;
  line-height: 117.6%;
  text-align: justify;
  letter-spacing: 0.005em;
  color: #000000;
  width: 100%;
  max-width: 718px;
  margin-bottom: 60px;
}
@media (min-width: 320px) {
  #benefit .action-wrapper .content .info p {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
}
@media (min-width: 576px) {
  #benefit .action-wrapper .content .info p {
    margin-top: 50px;
    font-size: 16px;
    margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
  #benefit .action-wrapper .content .info p {
    font-size: 18px;
    margin-bottom: 60px;
  }
}
@media (min-width: 960px) {
  #benefit .action-wrapper .content .info p {
    font-size: 21px;
  }
}
@media (min-width: 1200px) {
  #benefit .action-wrapper .content .info p {
    font-size: 27px;
  }
}
@media (min-width: 1300px) {
  #benefit .action-wrapper .content .info p {
    font-size: 30px;
  }
}
#benefit .action-wrapper .content button {
  font-weight: bold;
  font-size: 30px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #fffbfb;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 37px 80px;
  background: #bf7246;
  border-radius: 15px;
  margin-left: 33px;
}
@media (min-width: 320px) {
  #benefit .action-wrapper .content button {
    padding: 12px;
    font-size: 15px;
    width: auto;
    border-radius: 4px;
    margin: 0;
    margin-bottom: 20px;
  }
}
@media (min-width: 576px) {
  #benefit .action-wrapper .content button {
    padding: 12px;
    font-size: 15px;
    width: auto;
    border-radius: 4px;
    margin: 0;
    margin-bottom: 20px;
  }
}
@media (min-width: 768px) {
  #benefit .action-wrapper .content button {
    padding: 20px 5px;
    font-size: 16px;
    width: 180px;
    border-radius: 4px;
    margin: 0;
    margin-left: 33px;
  }
}
@media (min-width: 960px) {
  #benefit .action-wrapper .content button {
    padding: 20px 5px;
    font-size: 18px;
    width: 220px;
    border-radius: 7px;
  }
}
@media (min-width: 1200px) {
  #benefit .action-wrapper .content button {
    font-size: 30px;
    padding: 30px 50px;
    width: auto;
  }
}
@media (min-width: 1300px) {
  #benefit .action-wrapper .content button {
    font-size: 30px;
    width: 410px;
  }
}
#faq .faq-title {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
}
#faq .faq-title h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
}
@media (min-width: 320px) {
  #faq .faq-title h2 {
    font-size: 25px;
    text-align: center;
  }
}
@media (min-width: 768px) {
  #faq .faq-title h2 {
    font-size: 35px;
  }
}
#faq .list-item {
  margin: 10px 0 5px 0;
  transition: all 0.5s;
  border-top: 1px solid #9c9494;
}
#faq .list-item .list-item-title {
  cursor: pointer;
  position: relative;
  font-style: normal;
  font-weight: 600;
  padding-right: 20px;
  min-height: 60px;
  line-height: 117.6%;
  display: flex;
  align-items: center;
  letter-spacing: 0.005em;
  color: #000000;
}
@media (min-width: 320px) {
  #faq .list-item .list-item-title {
    font-size: 18px;
  }
}
@media (min-width: 520px) {
  #faq .list-item .list-item-title {
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  #faq .list-item .list-item-title {
    font-size: 25px;
  }
}
#faq .list-item .list-item-texts {
  height: 0;
  overflow: hidden;
  transition: all 0.5s;
}
#faq .list-item .list-item-texts p {
  padding: 5px 0 5px 10px;
  line-height: 1.2;
}
#faq button {
  margin-top: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 177px;
  height: 40px;
  outline: none;
  border: none;
  border: 2px solid #9c9494;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000000;
  background-color: #fff;
}
#outher-tour .outer-title {
  font-weight: bold;
  font-size: 35px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #cc5a1a;
  text-align: center;
  margin-bottom: 25px;
  padding-top: 40px;
}
@media (min-width: 320px) {
  #outher-tour .outer-title {
    font-size: 31px;
    margin-bottom: 15px;
  }
}
@media (min-width: 576px) {
  #outher-tour .outer-title {
    font-size: 31px;
    margin-bottom: 16px;
  }
}
@media (min-width: 992px) {
  #outher-tour .outer-title {
    font-size: 31px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1200px) {
  #outher-tour .outer-title {
    font-size: 35px;
    margin-bottom: 25px;
  }
}
@media (min-width: 1300px) {
  #outher-tour .outer-title {
    /* font-family: "Akrobat", sans-serif; */
    font-weight: bold;
    font-size: 35px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    color: #cc5a1a;
    text-align: center;
    margin-bottom: 25px;
  }
}
#outher-tour .outer-info {
  /* font-family: "Akrobat", sans-serif; */
  font-weight: 500;
  font-size: 30px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #cc5a1a;
  text-align: center;
  margin-bottom: 20px;
}
@media (min-width: 320px) {
  #outher-tour .outer-info {
    font-size: 25px;
    margin-bottom: 10px;
  }
}
@media (min-width: 576px) {
  #outher-tour .outer-info {
    font-size: 27px;
    margin-bottom: 14px;
  }
}
@media (min-width: 992px) {
  #outher-tour .outer-info {
    font-size: 27px;
    margin-bottom: 15px;
  }
}
@media (min-width: 1200px) {
  #outher-tour .outer-info {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
@media (min-width: 1300px) {
  #outher-tour .outer-info {
    font-weight: 500;
    font-size: 30px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #cc5a1a;
    text-align: center;
    margin-bottom: 20px;
  }
}
#outher-tour .item {
  border: 0.5px solid #eee;
  margin: 10px;
  min-height: 372px;
  cursor: pointer;
  position: relative;
}
#outher-tour .item .checked {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 10px;
  min-width: 20px;
  height: 20px;
  background-color: #f19b2f;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
@media (min-width: 768px) {
  #outher-tour .item {
    min-height: 320px;
  }
}
@media (min-width: 992px) {
  #outher-tour .item {
    min-height: 320px;
  }
  #outher-tour .item.admin {
    transition: 0.4s;
  }
  #outher-tour .item.admin:hover {
    border: 1px solid red;
  }
  #outher-tour .item.admin:hover .checked {
    display: flex;
    flex-direction: row-reverse;
  }
}
@media (min-width: 1200px) {
  #outher-tour .item {
    min-height: 340px;
  }
}
@media (min-width: 1300px) {
  /* img box */
  #outher-tour .item {
    min-height: 372px;
  }
}
#outher-tour .item-img {
  width: 100%;
  height: 195px;
  position: relative;
}
@media (min-width: 320px) {
  #outher-tour .item-img {
    width: 100%;
    height: 270px;
  }
}
@media (min-width: 576px) {
  #outher-tour .item-img {
    width: 100%;
    height: 270px;
  }
}
@media (min-width: 768px) {
  #outher-tour .item-img {
    width: 100%;
    height: 195px;
  }
}
@media (min-width: 1300px) {
  #outher-tour .item-img {
    width: 100%;
    height: 195px;
  }
}
#outher-tour .item-img img {
  object-fit: cover;
  /* title box */
}
#outher-tour .item-title {
  min-height: 70px;
  padding-top: 10px;
}
@media (min-width: 320px) {
  #outher-tour .item-title {
    min-height: 55px;
  }
}
@media (min-width: 576px) {
  #outher-tour .item-title {
    min-height: 70px;
  }
}
@media (min-width: 768px) {
  #outher-tour .item-title {
    min-height: 60px;
  }
}
@media (min-width: 992px) {
  #outher-tour .item-title {
    min-height: 60px;
  }
}
@media (min-width: 1200px) {
  #outher-tour .item-title {
    min-height: 60px;
  }
}
@media (min-width: 1300px) {
  #outher-tour .item-title {
    min-height: 70px;
    padding-top: 10px;
  }
}
#outher-tour .item-title h2 {
  /* font-family: "Akrobat", sans-serif; */
  font-weight: 600;
  font-size: 19px;
  line-height: 117.6%;
  letter-spacing: 0.005em;
  color: #000;
  text-transform: uppercase;
  text-align: center;
}
@media (min-width: 320px) {
  #outher-tour .item-title h2 {
    font-size: 18px;
  }
}
@media (min-width: 576px) {
  #outher-tour .item-title h2 {
    font-size: 24px;
  }
}
@media (min-width: 768px) {
  #outher-tour .item-title h2 {
    font-size: 16px;
  }
}
@media (min-width: 1200px) {
  #outher-tour .item-title h2 {
    font-size: 18px;
  }
}
@media (min-width: 1300px) {
  /* info box */
  #outher-tour .item-title h2 {
    font-weight: 600;
    font-size: 19px;
    line-height: 117.6%;
    letter-spacing: 0.005em;
    color: #000;
    text-transform: uppercase;
    text-align: center;
  }
}
#outher-tour .item-info {
  /* font-family: "Akrobat", sans-serif; */
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.005em;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 20px;
  font-weight: 500;
}
@media (min-width: 320px) {
  #outher-tour .item-info {
    font-size: 17px;
  }
}
@media (min-width: 576px) {
  #outher-tour .item-info {
    font-size: 22px;
  }
}
@media (min-width: 768px) {
  #outher-tour .item-info {
    font-size: 15px;
  }
}
@media (min-width: 1200px) {
  #outher-tour .item-info {
    font-size: 17px;
  }
}
@media (min-width: 1300px) {
  #outher-tour .item-info {
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0.005em;
    color: #000;
    text-transform: uppercase;
    text-align: center;
    padding-bottom: 20px;
  }
}
#outher-tour .item-info .red-text {
  color: red;
}
#outher-tour .item-info .value {
  font-size: 14px;
  font-weight: 500;
}

`;
