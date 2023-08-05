import React from 'react';
import '../style/user.scss';
import { Success } from '../components/Success';
import { Users } from '../components/Users';

// Тут список пользователей: https://reqres.in/api/users

function List() {
  const[users, setUsers]=React.useState([]);
  const[invites, setInvites]=React.useState([]);
  const[isLoading, setLoading]=React.useState(true);
  const[success, setSuccess]=React.useState(false);
  const[searchValue, setSearchValue]=React.useState('');

  React.useEffect(()=>{
    fetch('https://reqres.in/api/users')
    .then(res=>res.json())
    .then((json)=>{
      setUsers(json.data);
    })
    .catch((err)=>{
      console.warn(err);
      alert('Ошибка при получение пользователя');
    }).finally(()=>setLoading(false))
  },[]);

  const onChangeSearrchValue=(event: { target: { value: React.SetStateAction<string>; }; })=>{
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id:never)=>{
    if (invites.includes(id)){
      setInvites(prev=>prev.filter(_id=>_id != id));
    }else{
      setInvites(prev=>[...prev, id]);
    }
  };

  const onClickSendIvites = ()=>{
    setSuccess(true);
  };
  return (
    <div className="List">
      {success ?(
      <Success count={invites.length} />
      ):(
      <Users 
      onChangeSearrchValue={onChangeSearrchValue} 
      searchValue={searchValue} 
      items={users} 
      isLoading={isLoading} 
      invites={invites}
      onClickInvite={onClickInvite}
      onClickSendIvites={onClickSendIvites}
      />
      )}
    </div>
  );
}

export default List;