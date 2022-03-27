import React from "react";
import Header from "../../components/Header";
import validationSchema from "./validations";

import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import {ToastContainer} from "react-toastify";
import {useFormik} from "formik";
import {failToastify, successToastify} from "../../helpers/customToastify";
import {fetchRegister} from "../../api";
import {useAuth} from "../../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

function Signup() {
  const {login} = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const registerResponse = await fetchRegister({
          name: values.name,
          surname: values.surname,
          email: values.email,
          password: values.password,
        });
        login(registerResponse);
        console.log(registerResponse);
        successToastify("Başarı ile kayıt oldunuz");
        navigate("/profile");
      } catch (e) {
        failToastify(e.response.data.message);
      }
    },
  });
  return (
    <>
      <Header />
      <Flex align="center" justifyContent="center" width="full">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input
                  name="surname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.surname}
                  isInvalid={formik.touched.surname && formik.errors.surname}
                />
              </FormControl>
              <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password Confirm</FormLabel>
                <Input
                  name="passwordConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={
                    formik.touched.passwordConfirm && formik.errors.passwordConfirm
                  }
                />
              </FormControl>

              <Button mt="4" width="full" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
        <ToastContainer />
      </Flex>
    </>
  );
}

export default Signup;
