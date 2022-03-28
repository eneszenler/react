import React from "react";
import {useMutation, useQueryClient} from "react-query";
import {postProduct, updateProduct} from "../../../api";
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

function NewProduct() {
  const queryClient = useQueryClient();

  const newProductMutation = useMutation(postProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const handleSubmit = async (values, bag) => {
    console.log(values);
    message.loading({content: "Adding New Product...", key: "product_update"});

    const newValues = {
      ...values,
      photos: JSON.stringify(values.photos),
    };

    newProductMutation.mutate(newValues, {
      onSuccess: () => {
        console.log("success");

        message.success({
          content: "The Product Successfuly Added",
          key: "product_update",
          duration: 2,
        });
      },
    });
  };

  return (
    <div>
      <Heading mt={10} mb={5}>
        New Product
      </Heading>

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          photos: [],
        }}
        // validationSchema={validationSchema}
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
                    Save
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

export default NewProduct;
