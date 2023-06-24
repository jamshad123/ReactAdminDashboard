import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://jamshad123.github.io/personal-website/"
              rel="noopener noreferrer"
              target="_blank"
            >
              jamshad__tv
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
              >
                jamshad__tv
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
              >
                MIT License
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
