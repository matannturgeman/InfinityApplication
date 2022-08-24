import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";
import { FormField, FormProps } from "../../types/Views/views.types";
import { styled } from "@mui/material/styles";

const InputStyled = styled(Input)(() => ({ color: "white", direction: 'rtl' }));
const InputLabelStyled = styled(InputLabel)(() => ({ color: "white", right: 20 }));
const FormHelperTextStyled = styled(FormHelperText)(() => ({ color: "white" }));
const FormStyled = styled("form")(() => ({ display: "flex", flexDirection: "column", width: "30%", position: "relative" }));

function Form(props: FormProps) {
  const { form, onSubmit } = props;

  return (
    <FormStyled onSubmit={onSubmit} >
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
            />
            {helper && (
              <FormHelperTextStyled id={describedBy}>
                {helper}
              </FormHelperTextStyled>
            )}
          </FormControl>
        );
      })}
      <Button variant="contained" type="submit">Send</Button>
    </FormStyled>
  );
}

export default Form;
