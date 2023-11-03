import {
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { PiShareFat } from "react-icons/pi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import {
  FacebookShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
  MailruShareButton,
} from "react-share";

export default function ShareButton() {
  return (
    <Popover style={{ border: "none" }}>
      <PopoverTrigger style={{ border: "none" }}>
        <Flex className="shareButton">
          <PiShareFat style={{ fontSize: "20px" }} />
          <div style={{ marginLeft: "5px" }}>Share</div>
        </Flex>
      </PopoverTrigger>
      <PopoverContent style={{ border: "none" }}>
        <PopoverBody style={{ border: "none", padding: "0" }}>
          <Flex
            style={{
              border: "1px solid black",
              justifyContent: "space-evenly",
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <FacebookShareButton
              style={{
                fontSize: "15px",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                color: "#4267B2",
              }}
              url="http://localhost:3000/"
            >
              <BiLogoFacebookCircle />
            </FacebookShareButton>

            <InstapaperShareButton
              style={{
                fontSize: "15px",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                color: "#962fbf",
              }}
              url="http://localhost:3000/"
            >
              <AiFillInstagram />
            </InstapaperShareButton>

            <WhatsappShareButton
              style={{
                fontSize: "14px",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                color: "#075e54",
              }}
              url="http://localhost:3000/"
            >
              <BsWhatsapp />
            </WhatsappShareButton>
            <MailruShareButton
              style={{
                fontSize: "15px",
                border: "none",
                padding: "5px",
                cursor: "pointer",
                color: "red",
              }}
              url="http://localhost:3000/"
            >
              <ImMail4 />
            </MailruShareButton>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
