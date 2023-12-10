"use client";
import { useState } from "react";
import "./ContactForm.scss";
import InputText from "@/components/inputs/InputText/InputText";
import CustomButton from "@/components/buttons/CustomButton";
import PropTypes from "prop-types";
import { validateRule } from "@/utils/formValidation";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

const inputs = [
  {
    key: "name",
    label: "Name",
    placeholder: "John ",
    required: true,
    rule: "not-empty",
  },
  {
    key: "email",
    label: "Email",
    type: "mail",
    required: true,
    rule: "email-address",
  },
  {
    key: "message",
    label: "Message",
    required: true,
    textarea: true,
    rule: "not-empty",
  },
];

let FORM_DEFAULT = {};
for (const input of inputs) {
  FORM_DEFAULT[input.key] = "";
}

const ContactForm = ({
  className = "",
  formHeader = <></>,
  successHeader = <></>,
  ...props
}) => {
  const [form, setForm] = useState(FORM_DEFAULT);
  const [formStatus, setFormStatus] = useState({
    success: false,
    loading: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const validateFields = () => {
    const fieldsResults = {
      fields: [],
      allValid: false,
      valid: 0,
      invalid: 0,
    };

    for (let input of inputs) {
      const isValid = validateRule(input.rule, form[input.key]);
      fieldsResults.fields.push({
        key: input.key,
        isValid: isValid,
      });
      if (isValid) {
        fieldsResults.valid += 1;
      } else {
        fieldsResults.invalid += 1;
      }
    }

    fieldsResults.allValid = fieldsResults.invalid === 0;
    return fieldsResults;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { allValid } = validateFields();

    if (allValid) {
      setFormStatus((status) => ({ ...status, loading: true }));
      setTimeout(() => {
        setFormStatus((status) => ({
          ...status,
          loading: false,
          success: true,
        }));
        toast.success("Form submitted");
      }, 2000);
    } else {
      toast.error("Errors");
    }
  };
  return formStatus.success ? (
    <>
      {successHeader}
      <div className="contact-form-success">
        <Image src={"/check.svg"} alt="check" width={64} height={64} />
        <h1>Your form has been successfully submitted.</h1>

        <h2>
          We will be in touch with you shortly. Thank you for reaching out!
        </h2>
        <Link href={"/"}>Go home</Link>
      </div>
    </>
  ) : (
    <>
      {formHeader}
      <form
        {...props}
        className={`${className} contact-form`}
        onSubmit={submitForm}
      >
        {inputs.map((input) => (
          <div
            key={input.key}
            className={`contact-form__input-control ${
              input?.textarea ? "contact-form__input-control--full" : ""
            }`}
          >
            <label htmlFor={input.key} className="contact-form__input-label">
              {input.label} {input?.required ? "*" : ""}
            </label>
            <InputText
              textarea={input?.textarea}
              className={`contact-form__input-input`}
              type={input.type || "text"}
              id={input.key}
              name={input.key}
              value={form[input.key]}
              onChange={handleChange}
              required={input.required}
            />
          </div>
        ))}
        <CustomButton
          loading={formStatus.loading}
          loadingText="Sending form..."
          type={"submit"}
          className="contact-form__input__control--full"
        >
          Submit form
        </CustomButton>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
