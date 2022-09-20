const fetchDataBtn = document.querySelector(`#fetchdata`)
// - handler for fetch button
const result = document.querySelector(`#result`)
const name = document.querySelector(`#name`)
const twitter_username = document.querySelector(`#twitter_username`)
const public_repos = document.querySelector(`#public_repos`)
// handler for result div

const getData = function() {
    // First, we are setting inner text of result div to “Loading…”
    result.innerText = "Loading...."
    // Next, we make fetch() request
fetch("https://api.github.com/users/FramedGames1")
// When this piece of code is executed, browser immediately returns a
//  Promise object. A Promise could be in pending i.e. initial state, 
//  fulfilled i.e. success, and rejected state.
    .then(response => response.json())
    // Once the Promise is in fulfilled state it returns a Response object.
    //  Within the first then() we can call this json method to return the 
    //  response body as JSON i.e. then((res) => res.json())
    .then(data => {
        result.innerText = JSON.stringify(data,null,2)
        twitter_username.innerText = data['twitter_username'];
        name.innerText = data['name'];
        public_repos.innerText = data['public_repos'];
        // The previous statement i.e. res.json() again return a Promise
        //  so we need to again call the then() method. Inside then() 
        //  method we are setting the data received from API inside the 
        //  result div i.e. result.innerText = JSON.stringify(data, null, 2);.
        //   Since, it return a JSON object I have used the JSON.stringify(...)
        //    to pretty print result on screen.
})
// Last statement is to catch any error that might be caused due to wrong 
// resource URL, server error or network error.
    .catch(err => console.log(err))
}
// At last, we setup the fetchDataBtn listener that will listen for
//  click events and make a Fetch API request. 
fetchDataBtn.addEventListener('click', getData)

console.log(data.login);