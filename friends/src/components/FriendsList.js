import React from 'react';
import { getFriends } from '../actions';
import { connect } from 'react-redux';

class FriendsList extends React.Component {
	componentDidMount() {
		this.props.getFriends();
	}

	render() {
		return (
			<div>
				<ul>
					TEST
					{this.props.friends.map((friend) => {
						return <div key={friend.name}>{friend.name}</div>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ friends }) => ({
	friends
});

export default connect(mapStateToProps, { getFriends })(FriendsList);
