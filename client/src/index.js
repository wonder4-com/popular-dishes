import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'; 


// class BarTitle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'not changing'
//         }
//     }

//     componentDidMount () {
//         this.setState({data: 'changed once'})
//     }

//     render () {
//         return (
//             <div>
//             {this.state.data}
//             </div>
//         )
//     }
// }




// class Bar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             element: 'x'
//         }
//     }

//     componentDidMount () {
//         this.setState({element: this.props.element})
//     }

//     render () {
//         return (
//             <div>
//             {JSON.stringify(this.state.element)}
//             <BarTitle />
//             </div>
//         )
//     }
// }

// class App2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             arr: [1,2,3,4]
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick () {
//         this.setState({arr: [5,6,7,8]})
//     }

//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 {this.state.arr.map(element => <Bar element={element}/>)}
//             </div>
//         ) 
//     }
// }



ReactDOM.render(<App />, document.getElementById('app'));

