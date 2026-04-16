document.getElementById("load-btn").addEventListener("click", () => {
    document.getElementById("data").innerText = "Loading...";
    let promise = new Promise((resolve,reject) => {
        if (Math.random() > 0.5) {
            setTimeout(() => {
                 resolve("Data loaded");
         }, 2000);
        }else{
            setTimeout(() => {
                 reject("Data not loaded");
         }, 2000);
        }
    });
    promise.then((data) => {
        document.getElementById("data").innerText = data;  // Update #data here
        document.getElementById("status").innerText = data;
    });
    promise.catch((error) => {
        document.getElementById("data").innerText = error;    
    });
    promise.finally(() => {
        // Append instead of overwrite
        document.getElementById("status").innerText += " (loading completed)";
    });
});