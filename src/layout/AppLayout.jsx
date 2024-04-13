import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppLayout.style.css";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState(""); //키워드가 입력되면 기억
  const navigate=useNavigate(); //경로 다시 입력해주는 함수

  const searchByKeyword = (event) => { 
    event.preventDefault(); // 렌더링을 못하게 함
    navigate(`/movies?q=${keyword}`); // 경로를 새로 입력해줌.
    setKeyword(""); //키워드를 초기화 함
  };// searchByKeyword가 작동되면 keyword의 스테이트를 확인하여 경로를 재설정해준다.

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} height="40" alt="Brand Logo" />
            {/* 네비게이션바의 브랜드 자리에 로고 이미지를 넣음 */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {/* 링크를 만들어 / 으로 연결 */}
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>
              {/* 링크를 만들어 /movies 로 연결 */}
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="stbmit">
                Search
              </Button>
            </Form>
            {/* 타입 서치, 키워드를 밸류로 하고, event.target.value가 변할때
            setKeyword를 작동시켜서 keyword 의 스테이트를변경하고 서브밋하면
            searchByKeyword를 작동시킨다. */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
