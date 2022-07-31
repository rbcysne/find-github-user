import { UserProfile } from 'types/vendor/github';

import './styles.css';

const ResultCard = ({
    avatar_url,
    url,
    followers,
    location,
    name,
}: UserProfile) => {
    return (
        <div className="base-card profile-card">

                <div className="profile-img-container">
                    <div >
                        <img src={avatar_url} alt="Avatar do usuário" />
                    </div>
                </div>
                <div className="profile-info-container">
                    <div >
                        <span className="info-title">
                            Informações
                        </span>
                        <div className="info-details">
                            <p>Perfil: {url}</p>
                            <p>Seguidores: {followers}</p>
                            <p>Localidade: {location}</p>
                            <p>Nome: {name}</p>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default ResultCard;
