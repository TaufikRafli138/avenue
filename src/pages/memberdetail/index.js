import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { member } from "../../memberAvenue";
import { meta } from "../../content_option";

export const DetailMember = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Our dsd </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho" style={{ display: "flex", flexWrap: "wrap" }}>
          {member.dataMember && Object.keys(member.dataMember).map((key, i) => {
            const data = member.dataMember[key];
            const isCaptain = data.role === "captain";
            return (
              <div key={i} className="po_item" style={{ width: "33%", marginBottom: "20px", position: "relative" }}>
                {isCaptain && ( // Jika role adalah captain, tambahkan gambar dan gaya tambahan
                  <img src="/capt.png" alt="Captain Icon" style={{ position: "absolute", bottom: 10, left: 10, width: "25%", height: "auto" }} />
                )}
                <h1 className="memberName" style={{ position: "absolute", top: 10, left: 5, width: "25%", height: "auto", fontFamily: "lucida console" }}>{data.callsign}</h1>

                <img src={data.profile} alt="" style={{ width: "100%" }} />
                <div className="content">
                  {/* <p>{data.callsign}</p>
                  <p>``lorem ipsum dolor si amet``</p> */}

                  <a href="#">View Member</a> {/* Tautan tidak memiliki tujuan, ganti dengan tautan yang benar */}
                </div>
              </div>
            );
          })}
        </div>


      </Container>
    </HelmetProvider>
  );
};
