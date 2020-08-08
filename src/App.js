import React,{Component} from 'react';
import SearchBox from "./SearchBox";
import TableEntries from "./TableEntries";
import './App.css';
class App extends Component{

  constructor(props){
    super(props);
    this.state = { 
       dogs : [
        {
          key: "1",
          value: "ABC",
          custom: "eggewgjhjfgjhwgfewg",
          description: "fjrhfjhrjfjrfjr"
        },
        {
          key: "2",
          value: "HHH",
          custom: "egewgjhjfgjhwgfewg",
          description: "frhfjhrjfjrfjr"
        }
      ],
      searchEntry:''

    }
  }
  handleInput =(e) =>{

    console.log(e.target.value);
    this.setState({searchEntry:e.target.value})
  }

render(){
  let filteredDogs=this.state.dogs.filter((dog) => {
    return dog.value.toLowerCase().includes(this.state.searchEntry.toLowerCase())
  })
  let filteredDogs2 = this.state.dogs.filter((dog) => {
    return dog.custom.toLowerCase().includes(this.state.searchEntry.toLowerCase())
  })
  return (
<div className="App">
<h1>Table Entries</h1>
<SearchBox handleInput={this.handleInput}/>
      
<TableEntries filteredDogs={filteredDogs} />
      <TableEntries filteredDogs={filteredDogs2} />

</div>


  );
}
}



 
  
 

 
//   return (
    
   
//           {
//             data.map(abc=>
//             <tr>
//           <td>{abc.value}</td>
//           <td>{abc.custom}</td>
//           <td>{abc.description}</td>
//           </tr>
//           )
//           }
     
          
     
     
     
//      </table>
//      <form>
//      <input onChange={handleChange} type="text" name="name" />
//      </form>
//     </div>
//   );
// }

export default App;
