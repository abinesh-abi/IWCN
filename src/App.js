"use strict";

let React = React;
const e = React.createElement;
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));

function App() {
  return (
    <div className="container pt-5">
      <Table />
    </div>
  );
}



// initial Data
let initialData = [
  {id:1,name: "Onboarding Call",1: "",2: "",3: "",4: "",5: "",6: "",},
  {id:2,name: "Google Search Console Access",1: "",2: "",3: "",4: "",5: "",6: "",},
  {id:3,name: "Google Analytics Access",1: "",2: "",3: "",4: "",5: "",6: "",},
  {id:4,name: "Website Accees",1: "",2: "",3: "",4: "",5: "",6: "",},
  {id:5,name: "Technical Audit",1: "",2: "",3: "",4: "",5: "",6: "",},
];

// Table
function Table() {
  const [data, setData] = React.useState(initialData);
  function submit(){
    let body= JSON.stringify(data,null,1)
    // fetch('http://127.0.0.1:8080',{method:'POST',body})
    // .then(data=>alert('Submited'))
    // .catch(err=>alert('there is an error'))

    alert('this is the final data \n'+body)



  }
  return (
    <div>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">MONTH 1</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody >
          {data.map((datum, i) => {
            return <TableElement key={i} data={datum} setData={setData} />;
          })}
        </tbody>
      </table>
      <div className="d-flex">
        <a className={'btn btn-primary mx-auto'}
          onClick={submit}
        > Submit </a>
      </div>
    </div>
  );
}

// Table Elements
function TableElement({ data ,setData}) {
  function edit(val){
    setData(state=>{
      return state.map(elm=>{
        if(elm.id===data.id){
          return {...elm,[`${val.feald}`]:val.input}
        }
        return elm
      })
    })
  }
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{data.name}</th>
        <td><input value={data[1]} onChange={(e)=>edit({feald:1,input:e.target.value})} type="text" /></td>
        <td><input value={data[2]} onChange={(e)=>edit({feald:2,input:e.target.value})} type="text" /></td>
        <td><input value={data[3]} onChange={(e)=>edit({feald:3,input:e.target.value})} type="text" /></td>
        <td><input value={data[4]} onChange={(e)=>edit({feald:4,input:e.target.value})} type="text" /></td>
        <td><input value={data[5]} onChange={(e)=>edit({feald:5,input:e.target.value})} type="text" /></td>
        <td><input value={data[6]} onChange={(e)=>edit({feald:6,input:e.target.value})} type="text" /></td>
      </tr>
    </React.Fragment>
  );
}
