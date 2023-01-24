import React, { useState } from 'react';
import { CloseButton, Nav, Navbar, Offcanvas } from 'react-bootstrap';

type Props = React.ComponentPropsWithoutRef<'div'>;

const Navigation = ({ ...divProps }: Props) => {
  const expand = 'md';

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div {...divProps}>
      <Navbar
        variant="light"
        bg="light"
        expand={expand}
        className="mb-3 px-2 px-md-4"
      >
        <Navbar.Brand href="#" className="ps-2">
          Ján Korkoš
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleShow}
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header className="py-4">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
            <CloseButton onClick={handleClose} className="p-2 pe-3 m-1" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
};

export default Navigation;
