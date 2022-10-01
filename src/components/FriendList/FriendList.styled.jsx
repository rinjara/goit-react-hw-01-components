import styled from 'styled-components';

export const ListOfFrriends = styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
list-style: none;
width: 300px;
height: auto;
margin: 50px;
padding: 0;
`;

export const Friend = styled.li`
display: flex;
padding: 10px 15px;
align-items: center;
gap: 10px;
border-radius: 5px;
 box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px,
    rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Status = styled.span`
border-radius: 50%;
width: 15px;
height: 15px;
background-color: ${p => {
       return p.isOnline ? 'green' : 'red'
    }};
`;

export const Avatar = styled.img``;

export const FriendName = styled.p`
font-weight: bold;
font-size: large;
`;

