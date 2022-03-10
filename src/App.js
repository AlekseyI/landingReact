import { Button } from "./components/Button";
import {
  NavLink,
  NavLinks,
  NavLinksLogoContainer,
} from "./components/Header/NavLinks";
import { Page } from "./components/Page";
import { Container } from "./components/Container";
import { COLOR } from "./constants/color";
import { Image } from "./components/Image";
import { Typography } from "./components/Typography";

function App() {
  return (
    <>
      <Page url="../images/first-page-background.svg" style={{ height: 1118 }}>
        <NavLinks style={{ paddingTop: 60 }}>
          <NavLinksLogoContainer>
            <Image
              url="../images/skilline_logo.svg"
              style={{
                marginLeft: 100,
                height: 83,
              }}
            />
          </NavLinksLogoContainer>
          <Container>
            <NavLink href="#" style={{ marginRight: 80 }}>
              Home
            </NavLink>
            <NavLink href="#" style={{ marginRight: 80 }}>
              Careers
            </NavLink>
            <NavLink href="#" style={{ marginRight: 80 }}>
              Blog
            </NavLink>
            <NavLink href="#" style={{ marginRight: 80 }}>
              About Us
            </NavLink>
            <Button
              style={{
                boxShadow: "0px 20px 24px rgba(0, 0, 0, 0.03)",
                marginRight: 34,
              }}
            >
              Login
            </Button>
            <Button primary color="white" style={{ marginRight: 126 }}>
              Sign Up
            </Button>
          </Container>
        </NavLinks>
        <Container>
          <Container
            flexDirection="column"
            alignItems="flex-start"
            style={{ marginTop: 192, width: 681 }}
          >
            <Typography
              style={{
                fontSize: 54,
                fontWeight: "bold",
                lineHeight: "81px",
                color: COLOR.purple,
              }}
            >
              <span style={{ color: COLOR.orange }}>Studying</span> Online is
              now much easier
            </Typography>
            <Typography
              fontSize="24px"
              fontWeight="400"
              lineHeight="38.4px"
              color={COLOR.grey}
              style={{
                marginTop: 34,
                width: 523,
              }}
            >
              Skilline is an interesting platform that will teach you in more an
              interactive way
            </Typography>
            <Container
              justifyContent="flex-start"
              style={{
                marginTop: 52,
                width: "inherit",
              }}
            >
              <Button primary color="white" style={{ width: 220, height: 80 }}>
                Join for free
              </Button>
              <Button
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80,
                  boxShadow: "2px 20px 60px rgba(61, 155, 185, 0.1)",
                  marginLeft: 40,
                }}
              >
                <Image
                  url="../images/play.svg"
                  style={{
                    backgroundPosition: "right",
                    width: 33.33,
                    height: 32,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
              </Button>
              <Typography
                fontSize="24px"
                fontWeight="normal"
                fontStyle="normal"
                lineHeight="36px"
                color={COLOR.darkGrey}
                style={{
                  marginLeft: 32,
                }}
              >
                Watch how it works
              </Typography>
            </Container>
          </Container>
          <Container flexDirection="column" style={{ width: 1037 }} />
        </Container>
      </Page>
      <Page style={{ marginTop: 100 }}>
        <Container flexDirection="column">
          <Typography
            fontSize="28px"
            fontWeight="500"
            fontStyle="normal"
            lineHeight="160%"
            color={COLOR.greyPurple}
            style={{
              marginLeft: 32,
            }}
          >
            Trusted by 5,000+ Companies Worldwide
          </Typography>
          <Container
            alignItems="flex-start"
            style={{ marginTop: 32.93, height: 70 }}
          >
            <Image
              url="../images/google.svg"
              style={{ width: 168.3, height: 54.7 }}
            />
            <Image
              url="../images/netflix.svg"
              style={{ width: 151.34, height: 40.71, marginLeft: 75.75 }}
            />
            <Image
              url="../images/airbnb.svg"
              style={{ width: 161.32, height: 49.93, marginLeft: 75.75 }}
            />
            <Image
              url="../images/amazon.svg"
              style={{
                width: 153.64,
                height: 46.09,
                marginLeft: 75.75,
                marginTop: 10,
              }}
            />
            <Image
              url="../images/facebook.svg"
              style={{ width: 193.37, height: 38.41, marginLeft: 75.75 }}
            />
          </Container>
          <Typography
            fontSize="36px"
            fontWeight="600"
            fontStyle="normal"
            lineHeight="64.8px"
            color={COLOR.purple}
            style={{
              marginTop: 160.46,
            }}
          >
            All-In-One{" "}
            <span style={{ color: COLOR.orange }}>Cloud Software.</span>
          </Typography>
          <Typography
            fontSize="24px"
            fontWeight="400"
            fontStyle="normal"
            lineHeight="180%"
            textAlign="center"
            color={COLOR.greyPurple}
            style={{
              marginTop: 20,
              width: 837,
            }}
          >
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </Typography>
          <Container style={{ marginTop: 103 }}>
            <Image
              url="../images/invoice-container.svg"
              style={{ width: 550, height: 540, backgroundSize: "cover" }}
            >
              <Container
                flexDirection="column"
                style={{ marginTop: 200, paddingLeft: 106, paddingRight: 106 }}
              >
                <Typography
                  fontSize="30px"
                  fontWeight="550"
                  fontStyle="normal"
                  lineHeight="45px"
                  textAlign="center"
                  color={COLOR.purple}
                >
                  Online Billing, Invoicing, & Contracts
                </Typography>
                <Typography
                  fontSize="20px"
                  fontWeight="400"
                  fontStyle="normal"
                  lineHeight="180%"
                  textAlign="center"
                  color={COLOR.greyPurple}
                  style={{
                    marginTop: 24,
                  }}
                >
                  Simple and secure control of your organization’s financial and
                  legal transactions. Send customized invoices and contracts
                </Typography>
              </Container>
            </Image>
            <Image
              url="../images/calendar-container.svg"
              style={{
                width: 550,
                height: 530,
                backgroundSize: "cover",
                marginLeft: -40,
              }}
            >
              <Container
                flexDirection="column"
                style={{ marginTop: 200, paddingLeft: 106, paddingRight: 106 }}
              >
                <Typography
                  fontSize="30px"
                  fontWeight="550"
                  fontStyle="normal"
                  lineHeight="45px"
                  textAlign="center"
                  color={COLOR.purple}
                >
                  Easy Scheduling & Attendance Tracking
                </Typography>
                <Typography
                  fontSize="20px"
                  fontWeight="400"
                  fontStyle="normal"
                  lineHeight="180%"
                  textAlign="center"
                  color={COLOR.greyPurple}
                  style={{
                    marginTop: 24,
                  }}
                >
                  Schedule and reserve classrooms at one campus or multiple
                  campuses. Keep detailed records of student attendance
                </Typography>
              </Container>
            </Image>
            <Image
              url="../images/users-container.svg"
              style={{
                width: 550,
                height: 540,
                backgroundSize: "cover",
                marginLeft: -40,
              }}
            >
              <Container
                flexDirection="column"
                style={{ marginTop: 200, paddingLeft: 106, paddingRight: 106 }}
              >
                <Typography
                  fontSize="30px"
                  fontWeight="550"
                  fontStyle="normal"
                  lineHeight="45px"
                  textAlign="center"
                  color={COLOR.purple}
                >
                  Customer Tracking
                </Typography>
                <Typography
                  fontSize="20px"
                  fontWeight="400"
                  fontStyle="normal"
                  lineHeight="180%"
                  textAlign="center"
                  color={COLOR.greyPurple}
                  style={{
                    marginTop: 24,
                  }}
                >
                  Automate and track emails to individuals or groups. Skilline’s
                  built-in system helps organize your organization
                </Typography>
              </Container>
            </Image>
          </Container>
        </Container>
      </Page>
      <Page style={{ marginTop: 215 }} />
    </>
  );
}

export default App;
