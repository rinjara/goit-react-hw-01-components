import styled from 'styled-components';

export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 403px;
margin: 50px;
padding: 0;
border-radius: 5px;
/* border: 5px solid; */
 box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const UserDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px 0;
`;

export const Avatar = styled.img`
width: 150px;
border-radius: 50%;
box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1);
padding: 0;
margin-bottom: 20px;
`;

export const UserName = styled.p`
margin: 0;
padding: 5px;
font-weight: bold;
font-size: large;
`; 

export const UserInfo = styled.p`
margin: 0;
padding: 5px;
color: grey;
`;

export const Stats = styled.ul`
display: flex;
flex-direction: row;
/* gap: 10px; */
list-style: none;
align-items: center;
justify-content: center;
width: 100%;
margin: 0;
padding: 0;
background-color: rgb(237, 242, 245);
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: calc(100% / 3);
border: 1px lightgray solid;
padding: 20px
`;

export const Label = styled.span`
color: grey;
`;

export const Quantity = styled.span`
font-weight: bold;
font-size: large;
padding-top: 5px;
`; 