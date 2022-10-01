import PropTypes from 'prop-types';
import { ProfileCard, UserDescription, Avatar, UserName, UserInfo, Stats, StatsItem, Label, Quantity } from "./Profile.styled";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <ProfileCard>
            <UserDescription>
                <Avatar src={ avatar } alt="User avatar" />
                <UserName>{ username }</UserName>
                <UserInfo>@{ tag }</UserInfo>
                <UserInfo>{ location }</UserInfo>
            </UserDescription>
            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{ stats.followers }</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{ stats.views }</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{ stats.likes }</Quantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    );
}; 

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
})
}