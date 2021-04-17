// import React from 'react';
// import axios from "axios";

// class CSRFToken extends React.Component {

//     constructor(props) {
//         super(props);
//         this.csrftoken = this.getCookie('csrftoken'); 
//     }

//     getCookie = (name) => {
//         let cookieValue = null;
//         if (document.cookie && document.cookie !== '') {
//             const cookies = document.cookie.split(';');
//             for (let i = 0; i < cookies.length; i++) {
//                 const cookie = cookies[i].trim();
//                 // Does this cookie string begin with the name we want?
//                 if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
        
//         console.log({cookieValue});
//         return cookieValue;
//     }

//     render () {
//         console.log(this.csrftoken)
//         return (
//             <input type="hidden" name="csrfmiddlewaretoken" value={this.componentWillUpdatecsrftoken} />
//         );
//     }
// };
// export default CSRFToken;
