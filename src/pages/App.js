import logoGit from '../assets/logo.png';
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button'
import { api } from '../services/api'



function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


const pesquisarRepo = async () => {

const {data} = await api.get(`repos/${currentRepo}`)

if(data.id) {
  const jaExiste = repos.find(repo => repo.id === data.id)

if(!jaExiste){ 
  setRepos(prev => [...prev, data]);
  setCurrentRepo('')
  return
}

}
alert('Repositório não encontrado')

}

const removeRepo = (id) => {
  console.log('Removendo registro', id);
const handleRemoveRepo = repos.filter((repo) => repo.id !== id)

setRepos(handleRemoveRepo)
  
}



  return (
    <Container>
      <img src={logoGit} width={72} height={72} alt="logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={pesquisarRepo} />
      {repos.map(repo => <ItemRepo removeRepo={removeRepo} repo={repo} />)}
      </Container >
  )
}

export default App;
