import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchProduct, updateProduct} from "../../../api";
import validationSchema from "./Validations";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {message} from "antd";
import {Formik} from "formik";
import {FieldArray} from "formik";

function ProductDetail() {
  const {product_id} = useParams();
  const {isLoading, isError, data, error} = useQuery(["admin:products", product_id], () =>
    fetchProduct(product_id)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}.</div>;
  }

  const handleSubmit = async (values, bag) => {
    message.loading({content: "Updating...", key: "product_update"});

    try {
      await updateProduct(values, product_id);
      message.success({
        content: "The Product Successfuly Updated",
        key: "product_update",
        duration: 2,
      });
    } catch (e) {
      message.error("The Product Does not Updated!");
    }
  };

  return (
    <div>
      <Heading mt={10} mb={5}>
        Edit
      </Heading>

      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      width="auto"
                      isInvalid={touched.price && errors.price}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, i) => (
                              <Flex
                                key={i}
                                justifyContent="space-between"
                                marginBottom={3}
                              >
                                <Input
                                  name={`photos.${i}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                />
                                <Button
                                  ml="4"
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => arrayHelpers.remove(i)}
                                  isLoading={isSubmitting}
                                >
                                  Remove
                                </Button>
                              </Flex>
                            ))}

                          <Button
                            isLoading={isSubmitting}
                            mt={4}
                            onClick={() => arrayHelpers.push("")}
                          >
                            + Add a Photo
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>

                  <Button
                    colorScheme="green"
                    mt={4}
                    width="full"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Update
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default ProductDetail;
