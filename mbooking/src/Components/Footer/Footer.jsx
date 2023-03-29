import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
          <l1 className="fListItem">Places of interest</l1>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
          <l1 className="fListItem">B&Bs</l1>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">Seasonal and holiday deals </li>
          <li className="fListItem">Discover monthly stays</li>
          <li className="fListItem">Traveled Community </li>
          <li className="fListItem">Traveller Reviews Award </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight Finder</li>
          <li className="fListItem">Restaurant reservations </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Cornoavirus(COVID-19)</li>
          <li className="fListItem">About Booking.com</li>
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          <li className="fListItem">Partener Disbute</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
          <li className="fListItem">Coporate contact</li>
          <li className="fListItem">We Price Match</li>
          <li className="fListItem">MSA Statment</li>
        </ul>
      </div>
      <div className="Extranet_login">Extranet login</div>
      <br />
      <div className="fText">
        Copyright © 2022 Lamabooking.All Right reserved
      </div>

      <p
        style={{ color: "#6b6b6b", fontSize: "12px" }}
        class="footer__priceline__title"
      >
        Booking.com is part of Booking Holdings Inc., the world leader in online
        travel and related services.
      </p>
      <div class="footer-logos footerconstraint-inner">
        <div class="footer__priceline">
          <div class="footer__priceline__list" style={{width:"80%",margin:"auto"}}>
            <ul style={{display:"flex"}}>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
                  title="Booking.com"
                  alt="Booking.com"
                  height="26"
                  width="91"
                />
              </li>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
                  title="Priceline"
                  alt="Priceline"
                  height="26"
                  width="91"
                />
              </li>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
                  title="Kayak"
                  alt="Kayak"
                  height="26"
                  width="79"
                />
              </li>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
                  title="Agoda"
                  alt="Agoda"
                  height="26"
                  width="70"
                />
              </li>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
                  title="Rentalcars"
                  alt="Rentalcars"
                  height="26"
                  width="109"
                />
              </li>
              <li className="img_margin_li">
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
                  title="OpenTable"
                  alt="OpenTable"
                  height="26"
                  width="95"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
