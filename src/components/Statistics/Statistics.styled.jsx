import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  width: 600px;
  margin: 20px auto;
  border: 3px solid #fe4f60;
  border-radius: 50px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;
`;

export const Sectionlist = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SectionItem = styled.li`
  padding: 18px;
  border: 2px solid black;
  border-radius: 10px;
  background: #fe4f60;
  color: white;
  &:not(:last-child) {
    margin-right: 5px;
  } 
`;
