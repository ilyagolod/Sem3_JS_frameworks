import ContactCard from "../UI/ContactCard";
import SectionHeader from "../UI/SectionHeader";
import styles from "./footer.module.scss";

import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import globalStyles from "../../styles/global.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={globalStyles.wrapper}>
        <SectionHeader showBtn={false}>Contact</SectionHeader>
        <div className={styles.contacts__table}>
          <ContactCard title={"Phone"}>
            <p>+7 (499) 350-66-04</p>
          </ContactCard>
          <ContactCard title={"Socials"}>
            <div>
              <a href="https://instagram.com">
                <InstagramIcon />
              </a>
              <a href="https://www.whatsapp.com/?lang=ru_RU">
                <WhatsappIcon />
              </a>
            </div>
          </ContactCard>
          <ContactCard title={"Address"}>
            <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
          </ContactCard>
          <ContactCard title={"Working Hours"}>
            <p>24 hours a day</p>
          </ContactCard>
        </div>
        <div className={styles.map__container}>
          <YMaps>
            <Map
              className={styles.map}
              defaultState={{ center: [55.7134705, 37.6321047], zoom: 15 }}>
              <Placemark geometry={[55.7134705, 37.6321047]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
