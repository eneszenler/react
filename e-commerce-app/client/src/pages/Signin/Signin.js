import React from "react";
import Header from "../../components/Header";
import validationSchema from "./validations";
import {useNavigate} from "react-router-dom";

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
import {fetchLogin} from "../../api";
import {useAuth} from "../../contexts/AuthContext";

function Signin({history}) {
  const {login} = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });
        login(loginResponse);
        console.log(loginResponse);
        successToastify("Başarı ile Giriş Yaptnız");
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
            <Heading>Sign In</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                  bg="#fff"
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
                  bg="#fff"
                />
              </FormControl>

              <Button mt="4" width="full" type="submit">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
        <ToastContainer />
      </Flex>
      <ToastContainer />
    </>
  );
}

export default Signin;
