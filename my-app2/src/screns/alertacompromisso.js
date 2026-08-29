
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function AlertaCompromisso() {

 
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [compromissos, setCompromissos] = useState([]);

  
  f