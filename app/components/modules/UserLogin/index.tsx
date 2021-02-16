import CustomLink from "components/elements/Link";
import { Span } from "components/elements/Typography/Span";

const UserLogin = () => {
  return (
    <>
      <CustomLink size="medium" path="/" label="Okku Qarabey" />
      <div>
        <Span block>oku@mail.ru</Span>
      </div>
    </>
  );
};
export default UserLogin;
