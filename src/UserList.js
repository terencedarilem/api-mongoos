// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    // Fonction pour obtenir les données
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUser(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
