import {useMemo} from "react";
import {useQuery, useMutation, useQueryClient} from "react-query";
import {fetchProductList, deleteProduct} from "../../../api";
import {Button, Flex, Heading} from "@chakra-ui/react";
import {Table, Popconfirm} from "antd";
import {Link} from "react-router-dom";

function Products() {
  const queryClient = useQueryClient();

  const {isLoading, isError, data, error} = useQuery("admin:products", fetchProductList);

  const deletedMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link to={`/panel/products/${record._id}`}>
              <Button colorScheme="teal" variant="outline">
                Edit
              </Button>
            </Link>

            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deletedMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("succeess");
                  },
                });
              }}
              onCancel={() => console.log("Canceled")}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <Button bg="#FF2E63" color="#fff" marginLeft={2}>
                Delete
              </Button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}.</div>;
  }

  return (
    <>
      <div>
        <Flex justifyContent="space-between" mt={10} mb={5}>
          <Heading>Products</Heading>
          <Link to="/panel/products/new-product">
            <Button>+ Add New Product</Button>
          </Link>
        </Flex>

        <Table dataSource={data} columns={columns} rowKey="_id" mt={5} />
      </div>
    </>
  );
}

export default Products;
