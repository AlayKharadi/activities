sessionStorage.setItem("user", "John Doe");

console.log(sessionStorage.getItem("user"));

sessionStorage.removeItem("user");

console.log("size of the session-storage: " + sessionStorage.length);