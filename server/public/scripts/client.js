console.log('JS is sourced!');

//GET -> Read
function toDo() {
    // axios call to server
    axios({
      method: "GET",
      url: "/toDo",
    })
      .then((response) => {
        console.log("GET /toDo response.data", response.data);
        renderToDo(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  } // end toDo