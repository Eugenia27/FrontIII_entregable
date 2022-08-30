import React from 'react'
import listado from './data.json'


// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Item from './Item'

console.log(listado);

export default function Listado(props) {
  return (
    <div className='container'>
      {listado.map( item => (
        <Item aumentarContador={props.aumentarContador} key={item.id} item={item}/>
      ))} 
    </div>
  )
}
