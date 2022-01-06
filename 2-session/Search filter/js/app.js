let items = document.querySelector(".items");
let searchInput = document.getElementById("search");

const getItem = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {res.json()
            .then(res => {
                users = res;
                finalResult(users);
            })
            .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}

searchInput.addEventListener('input', e => {
    const element = e.target.value.toLowerCase();
    // console.log(element);

    const searchFunc = users
        .filter(user => user.name
        .toLowerCase()
        .includes(element))
    finalResult(searchFunc)
})

const finalResult = (arr) => {
    let output = "";

    arr.forEach(({ name, username }) => (output += `
        <tr>
            <td>
                <div class="results">
                    <div>
                        <h1>${name}</h1>
                    </div>
                    <div>
                        <p>${username}</p>
                    </div>
                </div>
            </td>
        </tr>
    `));
    items.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", getItem);