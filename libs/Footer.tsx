import {
  FacebookOutlined,
  Instagram,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import useDeviceDetect from "./hooks/useDeviceDetect";

const Footer = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack className="footer-container">Footer Mobile</Stack>;
  } else {
    return (
      <Stack className="footer-container">
        <Stack className="main">
          <Stack className="left">
            <Box component="div" className="footer-box">
              <img src="/img/logo/logoWhite.svg" alt="" className="logo" />
            </Box>
            <Box component={"div"} className="footer-box">
              <span>total free customer care</span>
              <p>+82 10 2910 1911</p>
            </Box>
            <Box component={"div"} className="footer-box">
              <span>nee live</span>
              <p>+82 10 2910 1911</p>
              <span>Support?</span>
            </Box>
            <Box component={"div"} className="footer-box">
              <p>follow us on social media</p>
              <div className="media-box">
                <FacebookOutlined />
                <Telegram />
                <Instagram />
                <Twitter />
              </div>
            </Box>
          </Stack>
          <Stack className="right">
            <Box component={"div"} className="top">
              <strong>keep yourself up to date</strong>
              <div>
                <input type="text" placeholder="Your Email" />
                <span>Subscribe</span>
              </div>
            </Box>
            <Box component={"div"} className="bottom">
              <div>
                <strong>Popular Search</strong>
                <span>Property for Rent</span>
                <span>Property low to high</span>
              </div>
              <div>
                <strong>Quick Links</strong>
                <span>Privacy Policy</span>
                <span>Pricing Plans</span>
                <span>Our Services</span>
                <span>Contact Support</span>
                <span>FAQs</span>
              </div>
              <div>
                <strong>Discover</strong>
                <span>Seoul</span>
                <span>Gyeongido</span>
                <span>Busan</span>
                <span>Jejudo</span>
              </div>
            </Box>
          </Stack>
        </Stack>
        <Stack className="second">
          <span>c Nestar - All rights reserved. Nestar 2024</span>
          <span>Privacy . Terms . Sitemap</span>
        </Stack>
      </Stack>
    );
  }
};

export default Footer;
