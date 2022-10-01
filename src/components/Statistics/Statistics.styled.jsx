import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const SectionStat = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: auto;
margin: 50px;
padding: 0;
border-radius: 5px;
 box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Title = styled.h2`
color: gray;
text-transform: uppercase;
`;

export const StatList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
/* gap: 20px; */
margin: 0;
padding: 0;
list-style: none;
`;

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(key) => `${getRandomHexColor()}`};
color: white;
padding: 12px;
width: 35px;
`;

export const Label = styled.span``;

export const Percentage = styled.span`
font-weight: bold;
font-size: large;
`;
