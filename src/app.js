// testing some JS
//below function is for programming joke
var jokeCategoryOne = document.getElementById("jokeCategoryOne").innerText;
var programmingJoke = () => {
    if (jokeCategoryOne === "Programming") {
        fetch(
            "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit&type=single",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "7bc5b770efmsh6a6ab0531c64ec2p1faa08jsne16a7e08ba33",
                    "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com"
                }
            }
        )
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                var joke = data.joke;

                var dataCategory = data.category;

                // console.log(joke);

                // document.getElementById("changedCatogeryHere").innerText = dataCategory;

                document.getElementById("joke").innerText = joke;
            })

            .catch((err) => {
                console.error(err);
            });
        document.getElementById('newJokeButton').onclick = function changeContent() {

            document.getElementById('joke').textContent = programmingJoke();


        }

    }


    else {
        console.log("code didn't work");
    }



};

//spooky joke category
var jokeCategoryTwo = document.getElementById("jokeCategoryTwo").innerText;
var spookyJoke = () => {
    if (jokeCategoryTwo === "Spooky") {

        fetch(
            "https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "7bc5b770efmsh6a6ab0531c64ec2p1faa08jsne16a7e08ba33",
                    "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com"
                }
            }
        )
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                if (data.joke == undefined) {
                    joke = `${data.setup} \n ${data.delivery}`;
                }
                else {
                    joke = data.joke;
                }
                document.getElementById("joke").innerText = joke;


            });
        document.getElementById('newJokeButton').onclick = function changeContent() {

            document.getElementById('joke').textContent = spookyJoke();


        }
    }




};



















// console.log(firstJokeCategory);

// if (firstJokeCategory == "Programming") {
//     console.log("code worked", "hurray", `${firstJokeCategory}`);
// } else {
//     console.log("code failed !");
// }

