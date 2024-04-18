import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { member } from "../../memberAvenue";
import  TwitterTimeline  from "./twitter";
import  TikTokEmbed  from "./tiktok";
import "./style.css";
import { Link } from "react-router-dom";


const MemberDetail = () => {
  const { callsign } = useParams();
  const memberData = member.dataMember[callsign];

  return (
    <Container className="mt-5 ngikutaplikasi">
      <Row>
        <Col lg={4} className="sticky-top">
          <Card style={{ padding: "20px" }}>
            <div>
              <Card.Img variant="top" src={memberData.profile} />
            </div>
            <Card.Body style={{ textAlign: "center" }}>
              <h1>{memberData.callsign}</h1>
            </Card.Body>

          </Card>
        </Col>

        <Col lg={8} style={{ overflowY: "auto", maxHeight: "70vh" }}>
          <Card>
            <Card.Body>
            <h2 style={{ textAlign: "right" }}>Avenue Member</h2>

              <hr />
              <br />
              <h4><strong>Nama:</strong> {memberData.nama}</h4>
              <br />
              <h4><strong>Tanggal Lahir:</strong> {memberData.bod}</h4>
              <br />
              <h4><strong>Horoskop:</strong> {memberData.horoskop}</h4>
              <br />
              <h4><strong>Nama Panggilan:</strong> {memberData.callsign}</h4>
              <br />
              <h4><strong>Horoskop:</strong> {memberData.horoskop}</h4>
              <br />
              <h4><strong>Asal:</strong> {memberData.asal}</h4>
              <br />
              <strong>Instagram:</strong>{" "}
              <a href={memberData.instagram}>@{memberData.instagram}</a>
              <br />
              <strong>Twitter:</strong>{" "}
              <a href={memberData.twitter}>@{memberData.twitter}</a>
              <br />
              <strong>TikTok:</strong>{" "}
              <a href={memberData.tiktok}>@{memberData.tiktok}</a>
            </Card.Body>
            
          </Card>

          <Card style={{ top: "20px" }}>
            <Card.Body>
           <TwitterTimeline username={memberData.twitter} />
           
            </Card.Body>
            
          </Card>

          <Card style={{ top: "40px" }}>
            <Card.Body>
           <TikTokEmbed username={memberData.tiktok} />
           
            </Card.Body>
            
          </Card>

          <Link to="/fanletter" style={{ display: "flex", alignItems: "center", justifyContent: "right", textDecoration: "none", marginBottom: "20px", marginTop: "50px" }}>
                <div id="button_p" className="ac_btn btn" style={{ width: 300, display: "flex", alignItems: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M0 3v18h24V3H0zm22 2L12 12 2 5h20zM2 19V7l10 7 10-7v12H2z" />
                  </svg>
                  <span style={{ marginLeft: "50px" }}>Send Fan Letter</span>
                </div>
              </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberDetail;
