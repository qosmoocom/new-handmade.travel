import React, { useContext } from "react";
import { AppContext } from "..";
import Link from "../../components/Link";
export default function Footer() {
  const { getItem } = useContext(AppContext);
  return (
    <div id="footer">
      <div className="container">
        <div className="content">
          {/* content left section */}
          <div className="content-left"></div>
          {/*___ content left section */}

          {/* content right section */}
          <div className="content-right">
            {/* article section */}
            <article>
              <div className="item">
                <div className="item-title">
                  <h3>{getItem("footer_center_section_title")}</h3>
                </div>
                <form className="item-form">
                  <div className="input-box">
                    <input type="text" />
                  </div>
                  <button>{getItem("footer_btn")}</button>
                </form>
                <div className="item-footer">
                  <div className="item-text-label-btn">
                    {getItem("footer_checked_label")}
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-title">
                  <h3>{getItem("footer_right_section_title")}</h3>
                </div>
                <div className="item-contact">
                  <div className="contact-item">
                    <h3>
                      <Link
                        hrefName={"footer_phone_1_number"}
                        href={getItem("footer_phone_1_number")}
                        name={"footer_phone_1_title"}
                      >
                        {getItem("footer_phone_1_title")}
                      </Link>
                    </h3>
                  </div>
                  <div className="contact-item">
                    <h3>
                      <Link
                        hrefName={"footer_phone_2_number"}
                        href={getItem("footer_phone_2_number")}
                        name={"footer_phone_2_title"}
                      >
                        {getItem("footer_phone_2_title")}
                      </Link>
                    </h3>
                  </div>
                  <div className="contact-item">
                    <h3>
                      <Link
                        hrefName={"footer_email_value"}
                        href={getItem("footer_email_value")}
                        name={"footer_email_name"}
                      >
                        {getItem("footer_email_name")}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </article>
            {/* ___article section */}
          </div>
          {/*___ content right section*/}
        </div>
      </div>
    </div>
  );
}
