import React from 'react';
const WithComponent = ({props}) => <Component {...props}/>

const Grid = ({ config, data }) => (
  <div className="grid" style={{
    display: "grid",
    gridTemplateColumns: `repeat(${Object.keys(config).length},1fr)`
  }}>
    {config.map(({ title, field }) => (
      <div className='th' key={field}>{title}</div>
    ))}

    {data.map((item,ind)=>(
      <>
      {config.map(({field , component:Component}) => (
        Component  ? 
        <Component key={`${ind}_${field}`} data={item[field]} />
        :
        <div className='td' key={`${ind}_${field}`}>{item[field]}</div>
      ))}
      </>
    ))}
  </div>
  // <table>
  //   <thead>
  //   <tr>
  //     <th>Col 1</th>
  //     <th>Col 2</th>
  //   </tr>
  //   </thead>
  //   <tbody>
  //   <tr>
  //     <td>Data 1</td>
  //     <td>Data 2</td>
  //   </tr>
  //   <tr>
  //     <td>Data 1</td>
  //     <td>Data 2</td>
  //   </tr>
  //   </tbody>
  // </table>
);

export default Grid;