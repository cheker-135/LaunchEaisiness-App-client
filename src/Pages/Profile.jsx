import React, { useState } from "react";
import ButtonSimple from "../Components/Buttons/ButtonSimple";
import NotificationsModal from "../Components/Modals/NotificationsModal";
import Verification from "../Components/Modals/Verification";
import notif from "../Assest/Logos/notification-bing.png";
import avatar from "../Assest/images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { updateUser } from "../redux/actions/user";

const Profile = () => {
  const profile = {
    firstName: "Amanda Smith",
    lastName: "Mandy",
    phoneNumber: "123-456-7890",
    country: "USA",
    language: "English",
    speciality: "Software Engineering",
    email: "amanda.smith@example.com",
    newPassword: "",
  };

  const user = useSelector((state) => state.userReducer.user);
  const [formData, setFormData] = useState(user);
  const [open, setOpen] = useState(false);
  const [cv, setCv] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    console.log(user._id, formData);
    await dispatch(updateUser(user._id, formData));
    handleClose();
  };

  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleCvUpload = () => {};
  const handleOpenNotifications = () => setNotificationsOpen(true);
  const handleCloseNotifications = () => setNotificationsOpen(false);
  return (
    <div className="home-conatiner" style={{ paddingTop: "7em" }}>
      <div className="profile-container">
        <div className="bar-liniar"></div>
        <div className="top-profile">
          <div className="info-profile">
            <h4>Welcome, {user.firstname}</h4>
            <p>Tue, 07 June 2022</p>
          </div>
          <span className="notif" onClick={handleOpenNotifications}>
            <img src={notif} alt="notif" />
          </span>
        </div>
        <div className="top-profile-container">
          <div className="profile-header">
            <img src={avatar} alt="Profile" className="profile-img" />
            <div className="info-profile">
              <h2 style={{ textAlign: "justify" }}>
                {user.firstname} {user.lastname}
              </h2>
              <p style={{ textAlign: "justify", color: "var(--text-color)" }}>
                {user.email}
              </p>
            </div>
          </div>
          <div className="form-actions">
            <Button
              style={{
                padding: "1.1em 2em",
                width: "14em",
                display: "flex",
                justifyContent: "center",
                background: "var(--secondary-color)",
                color: "var(--text-color)",
                fontSize: "1rem",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s",
                zIndex: 10,
                fontFamily: '"Poppins", sans-serif',
                textDecoration: "none",
              }}
              onClick={handleOpen}
            >
              Save changes
            </Button>
          </div>
        </div>
        <form className="profile-form">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter your First name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Enter your last Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter your nationality"
              />
            </div>
          </div>
          <div className="form-column">
            {/* <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Enter your language"
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="diplome">Diplome</label>
              <input
                type="text"
                id="diplome"
                name="diplome"
                value={formData.diplome}
                onChange={handleChange}
                placeholder="Enter your diplome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter a new password"
              />
            </div> */}
          </div>
        </form>
        <div className="bottom-profile">
          <div className="form-actions">
            <ButtonSimple text="Insert CV" func={handleCvUpload} />

            <input
              type="file"
              id="cvInput"
              style={{ display: "none" }}
              onChange={handleCvChange}
            />
          </div>
          {cv && (
            <div className="cv-details">
              <p>Uploaded CV: {cv.name}</p>
            </div>
          )}
        </div>
      </div>
      <Verification
        open={open}
        handleSave={handleSave}
        handleClose={handleClose}
      />
      <NotificationsModal
        open={notificationsOpen}
        handleClose={handleCloseNotifications}
      />
      {/* <SidePub /> */}
    </div>
  );
};

export default Profile;
