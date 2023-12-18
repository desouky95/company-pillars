import { Flex, Typography } from "antd";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Flex justify="center" align="center" style={{ maxHeight: 70 }}>
        <Typography.Text>
          Got questions?{" "}
          <Typography.Text color="#637182">Take a look at our </Typography.Text>
          <Link href="/faqs">FAQS</Link>, talk to us on Twitter{" "}
          <Link href={"/company"}>@company</Link>
          <Typography.Text> or send an email to </Typography.Text>
          <Link href={"mailto:team@company.com"}>team@company.com</Link>
        </Typography.Text>
      </Flex>
    </>
  );
}
