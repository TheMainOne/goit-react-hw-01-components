import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
      background-color: gainsboro;

  width: 500px;
  margin: 20px auto;
  border-radius: 8px;
`;

export const SectionTitle = styled.h2`
font-weight: 400;
  margin: 0;
  margin-bottom: 15px;
`;

export const Sectionlist = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SectionItem = styled.li`
display: flex;
    justify-content: center;
    align-items: center;
    min-width:68px;
  padding: 15px;
  border: 1px solid ${(props)=> props.backgroundColor};
  background-color: ${(props)=> props.backgroundColor};
  color: #ffffff;
  cursor: pointer;
  transition: transform 200ms linear;
  
  &:first-of-type {
    border-bottom-left-radius: 8px;
  }

  &:last-of-type {
    border-bottom-right-radius: 8px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;
