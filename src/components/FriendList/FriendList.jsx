import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListOfFrriends } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
        <ListOfFrriends>
            {friends.map(friend =>
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar} 
                    name={friend.name}
                    isOnline={friend.isOnline}
                />)
            }
        </ListOfFrriends>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    friend: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
}