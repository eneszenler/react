import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().required("Zorunlu Alan"),
  surname: yup.string().required("Zorunlu Alan"),
  email: yup.string().email("Geçerli bir email girin.").required("Zorunlu Alan"),
  password: yup
    .string()
    .min(6, "Parolaniz en az 5 karakter olmalıdır.")
    .required("Zorunlu Alan"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar Birbirleriyle Aynı Olmalıdır.")
    .required("Zorunlu Alan"),
});

export default validations;
