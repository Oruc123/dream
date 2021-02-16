import Main from "components/elements/Main";
import Header from "components/modules/Header";
import Posts from "components/modules/Posts/";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main>
        <Posts />
      </Main>
    </>
  );
};
export default HomePage;
