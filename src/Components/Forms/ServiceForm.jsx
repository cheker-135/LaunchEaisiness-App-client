import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

// Modal style
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

// Form field styles
const fieldStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",

  borderRadius: "4px",
  border: "1px solid #ccc",
  color: "var(--text-color)",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
};

// Step-specific validation schemas
const validationSchemas = [
  // Step 1: Basic Info
  Yup.object().shape({
    company_name: Yup.string().required("Company Name is required"),
    manager: Yup.string(),
    certificate_number: Yup.string(),
    siege_social: Yup.string(),
  }),
  // Step 2: Legal Details
  Yup.object().shape({
    registre_commerce: Yup.string(),
    matricule_fiscale: Yup.string(),
    forme_juridique: Yup.string(),
    capitale_social: Yup.number()
      .positive("Capitale Sociale must be positive")
      .required("Capitale Sociale is required"),
    participation_locale: Yup.array().of(
      Yup.object().shape({
        country: Yup.string().required("Country is required"),
        percentage: Yup.number()
          .min(0, "Percentage cannot be negative")
          .max(100, "Percentage cannot exceed 100")
          .required("Percentage is required"),
      })
    ),
  }),
  // Step 3: Contact Info
  Yup.object().shape({
    tel: Yup.string().required("Telephone is required"),
    fax: Yup.string(),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  }),
  // Step 4: Files and Images
  Yup.object().shape({
    files: Yup.array().min(1, "At least one file is required"),
    image: Yup.mixed().required("Image is required"),
  }),
];

const ServiceForm = ({ open, handleClose }) => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      label: "Basic Information",
      fields: {
        company_name: "",
        manager: "",
        certificate_number: "",
        siege_social: "",
      },
    },
    {
      label: "Legal Details",
      fields: {
        registre_commerce: "",
        matricule_fiscale: "",
        forme_juridique: "",
        capitale_social: "",
        participation_locale: [{ country: "", percentage: 0 }],
      },
    },
    {
      label: "Contact Information",
      fields: {
        tel: "",
        fax: "",
        email: "",
      },
    },
    {
      label: "Files and Images",
      fields: {
        files: [],
        image: null,
      },
    },
    {
      label: "Review",
      fields: {},
    },
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Formik
          initialValues={steps.reduce(
            (acc, curr) => ({ ...acc, ...curr.fields }),
            {}
          )}
          validationSchema={validationSchemas[step]}
          onSubmit={(values) => console.log(values)}
        >
          {({ values, handleSubmit, isValid, dirty }) => (
            <Form onSubmit={handleSubmit}>
              <Typography id="modal-title" variant="h6" component="h2">
                {steps[step].label}
              </Typography>

              {step === 0 && (
                <>
                  <Field
                    name="company_name"
                    placeholder="Company Name"
                    style={fieldStyle}
                  />
                  <ErrorMessage
                    name="company_name"
                    component="div"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />

                  <Field
                    name="manager"
                    placeholder="Manager"
                    style={fieldStyle}
                  />
                  <Field
                    name="certificate_number"
                    placeholder="Certificate Number"
                    style={fieldStyle}
                  />
                  <Field
                    name="siege_social"
                    placeholder="Siege Social"
                    style={fieldStyle}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <Field
                    name="registre_commerce"
                    placeholder="Registre Commerce"
                    style={fieldStyle}
                  />
                  <Field
                    name="matricule_fiscale"
                    placeholder="Matricule Fiscale"
                    style={fieldStyle}
                  />
                  <Field
                    name="forme_juridique"
                    placeholder="Forme Juridique"
                    style={fieldStyle}
                  />
                  <Field
                    name="capitale_social"
                    placeholder="Capitale Sociale"
                    style={fieldStyle}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <Field
                    name="tel"
                    placeholder="Telephone"
                    style={fieldStyle}
                  />
                  <Field name="fax" placeholder="Fax" style={fieldStyle} />
                  <Field name="email" placeholder="Email" style={fieldStyle} />
                </>
              )}

              {step === 3 && (
                <>
                  <input
                    type="file"
                    name="files"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      values.files = files;
                    }}
                  />
                  <ErrorMessage
                    name="files"
                    component="div"
                    style={{ color: "red", fontSize: "0.875rem" }}
                  />
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      values.image = file;
                    }}
                  />
                </>
              )}

              {step === 4 && (
                <Box>
                  <Typography variant="body1">Review Your Data:</Typography>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <tbody>
                      {Object.entries(values).map(([key, value]) => (
                        <tr key={key}>
                          <td
                            style={{
                              border: "1px solid #ccc",
                              padding: "8px",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            {key}
                          </td>
                          <td
                            style={{
                              border: "1px solid #ccc",
                              padding: "8px",
                              textAlign: "left",
                            }}
                          >
                            {Array.isArray(value)
                              ? JSON.stringify(value)
                              : value || "N/A"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Box>
              )}

              <Box sx={buttonGroupStyle}>
                {step > 0 && (
                  <Button
                    variant="outlined"
                    onClick={prevStep}
                    sx={{ marginRight: "8px" }}
                  >
                    Back
                  </Button>
                )}
                {step < steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={nextStep}
                    disabled={!dirty || !isValid}
                  >
                    Next
                  </Button>
                ) : (
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                )}
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ServiceForm;
