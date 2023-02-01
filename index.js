function printHello() {
    console.log("Hello World!");
}

async function getUser() {
    await fetch("https://api.github.com/users/eduardo-eiji-goto")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("profile-img").src = data.avatar_url;
            document.getElementById("profile-name").innerHTML = data.name;
        });
}
