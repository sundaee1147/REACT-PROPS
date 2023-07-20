
import React from "react";
import PropTypes from "prop-types";


const Profile = (props) => {

    console.log(`props:`, props);

        return (
            <div>
                <h1>{props.fullName}</h1>

                <h3>{props.profession}</h3>

                <div>{props.children}</div>

                <p><b>BIO:</b><br />{props.bio}</p>

                <button
                onClick={() => props.handleName(`Profile User: ${props.fullName}`)} style={{ border: 'solid 5px #f162ff', borderRadius: '20px', backgroundColor: '#ffd79d', fontSize: '15px'}}
                >
                SHOW!
                </button>
            </div>
        );
};

// Set default props
    Profile.defaultProps = {
    fullName: "FirstName LastName",
    bio: "I'm Sundaee. I like exploring, I also design and code beautifully simple things.",
    profession: "profession",
    children: "profile photo",
};


// Set PropTypes
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.any,
};

export default Profile;