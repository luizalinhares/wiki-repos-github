import React from 'react';
import {ItemContainer} from './styles'


function ItemRepo ({repo, removeRepo}) {

const handleRemoveRepo = () => {
  removeRepo(repo.id)
}

return (
  <ItemContainer onClick={handleRemoveRepo}>
<h3>{repo.name}</h3>
<p>{repo.full_name}</p>
<a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
<a href="#" rel="noreferrer" className="remove">Remover</a>
<hr/>
  </ItemContainer>
)

}

export default ItemRepo