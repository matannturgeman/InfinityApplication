import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import { cloneDeep } from "lodash";
import { FormField, FormProps } from "../../types/Views/views.types";
import { styled } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import env from "react-dotenv";

const { TEMPLATE_ID, PUBLIC_ID, SERVICE_ID } = env;

const InputStyled = styled(Input)(() => ({ color: "white", direction: "rtl" }));
const InputLabelStyled = styled(InputLabel)(() => ({
  color: "white",
  right: 20,
}));
const FormHelperTextStyled = styled(FormHelperText)(() => ({ color: "white" }));
const FormStyled = styled("form")(() => ({
  flexDirection: "column",
  position: "relative",
  display: "grid",
  width: "100%",
  gridTemplateRows: "50% 50%",
  gridTemplateColumns: "50% 50%",
  marginBottom: 40,
}));

function Form(props: FormProps) {
  const { form } = props;

  const [formFieldSData, setFormFieldSData] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formFieldSData, PUBLIC_ID);
    await Swal.fire(
      "Email was sent successfully",
      "We will be in touch",
      "success"
    );
  };

  const updateFormFieldSData = ({ value, field }) =>
    setFormFieldSData((prev) => {
      prev = cloneDeep(prev);
      prev[field] = value;
      return prev;
    });

  return (
    <FormStyled onSubmit={onSubmit}>
      {form.map((formField: FormField) => {
        const { name, isRequired, label, helper, type } = formField;
        const describedBy = `described-${name}`;
        return (
          <FormControl onSubmit={onSubmit} key={name}>
            <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
            <InputStyled
              id={name}
              name={name}
              aria-describedby={describedBy}
              required={isRequired}
              type={type}
              onChange={(e) =>
                updateFormFieldSData({ field: name, value: e.target.value })
              }
            />
            {helper && (
              <FormHelperTextStyled id={describedBy}>
                {helper}
              </FormHelperTextStyled>
            )}
          </FormControl>
        );
      })}
      <Button variant="contained" type="submit">
        Send
      </Button>
    </FormStyled>
  );
}

export default Form;
