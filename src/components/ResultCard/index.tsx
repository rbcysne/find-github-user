import { UserProfile } from "types/vendor/github";

import './styles.css';

const ResultCard = ( { avatar_url, url, followers, location, name } : UserProfile ) => {
    return (
        <div className="base-card profile-card">
            <div className="profile-content-container">
                <div className="profile-img-container">
                    <img 
                        src={avatar_url}
                        alt="Avatar do usuário" />
                </div>
                <div className="profile-info-container">
                    <span>Informações</span>
                    <p>{url}</p>
                    <p>{location}</p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;
