import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import React from "react";

export default function Website({ data }) {
  let websites = data.websites;
  return (
    <div className="mt-20 grid grid-cols-4 gap-4 mx-4">
      {websites.map((item, index) => (
        <Card className="max-w-[400px]" key={index}>
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{item.name}</p>
              <p className="text-small text-default-500">{item.url}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{item.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href={item.url}
            >
              Visit website.
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
