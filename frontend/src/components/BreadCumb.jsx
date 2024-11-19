import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
const BreadCumb = () => {
  return (
    <>
      <Breadcrumb
        spacing="20px"
        padding="20px"
        backgroundColor="#E5E4E2"
        separator={<MdKeyboardArrowRight />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="./">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BreadCumb;
