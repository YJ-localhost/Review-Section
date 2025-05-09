import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  background: var(--light-color);
  color: var(--dark-color);
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubBtn = () => {
  return (
    <Button>
      <Logo src="/github-mark.svg" />
      Continue width Github
    </Button>
  );
};

export default GithubBtn;
