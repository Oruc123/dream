import Box from "components/elements/Box";
import Paragraph from "components/elements/Typography/Paragraph";
import Link from "next/link";
import { StyledPostImg } from "./Atom";

function Content() {
  return (
    <main>
      <Box paddingY={1} paddingX={1}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa
          tempora recusandae tenetur accusantium blanditiis voluptates quas id,
          quasi nostrum dolor placeat modi incidunt, veritatis perspiciatis
          facere ratione quibusdam hic!
        </Paragraph>
      </Box>
      <Link href="#">
        <a href="#">
          <StyledPostImg src="/post.jpg" />
        </a>
      </Link>
    </main>
  );
}

export default Content;
