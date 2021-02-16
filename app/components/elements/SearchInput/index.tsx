import { StyledInput, SearchWrapper, SearchIcon } from "./Atom";
interface IInput {
  type?: string;
}

const SearchInput = ({ type = "text" }: IInput) => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInput placeholder="Seach" type={type} />
    </SearchWrapper>
  );
};
export default SearchInput;
