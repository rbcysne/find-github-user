import axios from 'axios';
import ProfileLoader from 'components/ResultCard/ProfileLoader';
import { useState } from 'react';
import { UserProfile } from 'types/vendor/github';
import Button from '../../components/Button';
import ResultCard from '../../components/ResultCard';

import "./styles.css";

type FormData = {
  user: string;
}

const Search = () => {

  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const [userProfile, setUserProfile] = useState<UserProfile>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
    .get(`https://api.github.com/users/${formData.user}`)
    .then((response) => {
      setUserProfile(response.data);
      console.log(response.data);
    })
    .finally(() => {
      setIsLoading(false);
    })
    .catch((error) => {
      setUserProfile(undefined);
      console.log(error);
    });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(value);

    setFormData( {...formData, [name]:value} );
  }

  return (
    <div className="search-container">
      <form onSubmit={ handleSubmit }>
        <div className="form-container">
          <div className="base-card search-card">
            <div>
              <h1>Encontre um perfil Github</h1>
              <input type="text" name="user" value={formData.user}
                     placeholder="Usuário Github" onChange={ handleChange }/>
            </div>

            <div>
              <Button text="Econtrar" />
            </div>
          </div>

          { isLoading ? <ProfileLoader /> : 
            (userProfile &&
            <ResultCard avatar_url={userProfile.avatar_url} 
                        url={userProfile.url} 
                        followers={userProfile.followers} 
                        location={userProfile.location} 
                        name={userProfile.name} />)
          }
        </div>
      </form>
    </div>
  );
};

export default Search;
