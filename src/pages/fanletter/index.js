import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { contactManagement } from "../../mailerTemplate";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig, dataabout } from "../../content_option";
import MemberOption from "./memberOption";

export const Fanletter = () => {
  useEffect(() => {
    document.body.classList.add("member-page"); // Tambahkan kelas "member-page" ke elemen body saat komponen dimuat
    return () => {
      document.body.classList.remove("member-page"); // Hapus kelas saat komponen dibongkar
    };
  }, []);
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleChangeMember = (selectedMember) => {
    setFormdata({ ...formData, selectedMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      subject: "Hai, " + formData.selectedMember + ". ada fanletter baru nih !!",
      user_name: formData.name,
      to_name: formData.email, //Ganti Kalau member udah punya email
      from: formData.selectedMember,
      H1: "Hai, " + formData.selectedMember,
      bodyemailatas: contactManagement.bodyemailatas.replace('{avenueMember}', formData.selectedMember),
      bodyemailtengah: contactManagement.bodyemailtengah.replace('{message}', formData.message),
      bodyemailbawah: contactManagement.bodyemailbawah
        .replace('{From}', formData.name)
        .replace('{Email}', formData.email)
        .replace('{Phone}', formData.phone)
        .replace('{Social}', formData.social)
        .replace('{Organization}', formData.origin),
      footer_akhir: contactManagement.footer_akhir,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        "management_avenue",
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "Success mengirim fan letter!, Fan letter anda telah diterima member.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };


  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container className="ngikutin">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Fan Letter</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Come on, send a letter to your favorite member. and show them something!!</h3>
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${formData.show ? "d-block" : "d-none"
                }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <p>{dataabout.aboutme}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Who Are You ?"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="What's Your Email ?"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="What's Your Phone Number ?"
                    value={formData.phone || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="social"
                    name="social"
                    placeholder="What's Your Social Media ?"
                    type="text"
                    value={formData.social || ""}
                    required
                    onChange={handleChange}
                  />

                </Col>
              </Row>

              <Col lg="12" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="origin"
                  name="origin"
                  placeholder="Where Are You From?"
                  type="text"
                  value={formData.origin || ""}
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col lg="12" className="form-group">
                <MemberOption handleChangeMember={handleChangeMember} />
              </Col>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit" style={{ width: "100%" }}>
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
