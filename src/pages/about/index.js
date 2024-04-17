import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import {
  albumAvenue,
} from "../../albumAvenue";
import SpotifyPlayer from './albumPlayer';
import Carousel from './photoCarousel';
export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp_onAb">
          <Col className="d-flex align-items-center">
            <Col lg="5">
              <div >
                <img src="/clipImg1.png" style={{ width: '100%' }} alt="Description" />
              </div>
            </Col>
            <Col lg="7" style={{ padding: '40px' }}>
              <div>
                <p style={{ textAlign: 'justify' }}>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Col>

        </Row>
        <Row className="sec_sp_onAb">
          <Col className="d-flex align-items-center">
            <Col lg="7" style={{ padding: '40px' }}>
              <div>
                <p style={{ textAlign: 'justify' }}>{dataabout.aboutme}</p>
              </div>
            </Col>
            <Col lg="5" >

              <div >
                <img src="/clipImg2.png" style={{ width: '100%' }} alt="Description" />
              </div>
            </Col>
          </Col>

        </Row>


        <Row className="sec_sp_sec" >
          <Col className="d-flex align-items-center">
            <div>
              <h1 className="display-4 mb-4">History</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p style={{ textAlign: "justify" }}>{dataabout.aboutme}</p>

            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col className="d-flex align-items-center">
            <div>
              <h1 className="display-4 mb-4">Discography</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p style={{ textAlign: "justify" }}>{dataabout.aboutme}</p>
              <SpotifyPlayer data={albumAvenue} />
            </div>
          </Col>
        </Row>
        <Row className="sec_sp_sec" >
          <Col className="d-flex align-items-center">
            <div>
              <h1 className="display-4 mb-4">Fans Club</h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p style={{ textAlign: "justify" }}>{dataabout.aboutme}</p>
              <Link to="/fanletter" style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", marginBottom: "20px", marginTop: "50px" }}>
                <div id="button_p" className="ac_btn btn" style={{ width: 300, display: "flex", alignItems: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M0 3v18h24V3H0zm22 2L12 12 2 5h20zM2 19V7l10 7 10-7v12H2z" />
                  </svg>
                  <span style={{ marginLeft: "50px" }}>Send Fan Letter</span>
                </div>
              </Link>

            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col className="d-flex align-items-center">

          </Col>
        </Row>s










        {/* 


        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <tr>
                        <th scope="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>{data.jobtitle}</span>
                          <span>{data.date}</span>
                        </th>

                      </tr>
                      <tr>
                        <td colSpan="5"><i>{data.where}<br /><p style={{ color: 'gray' }}>{data.location}</p></i>{data.description}</td>
                      </tr>
                    </tr>

                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div className="skills-container">
                  {skills.map((data, i) => (
                    <div key={i} className="skill-item">
                      <span className="dot"></span>
                      <h3 className="progress-title">{data.name}</h3>
                    </div>
                  ))}
                </div>
              );

            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  Tools
                  <i><p style={{ color: 'gray' }}>{data.tools}</p></i>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider >
  );
};
