fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {

    for (let i of data) {
        const ul = document.getElementById('lista')
        const li = document.createElement('li')
        li.innerText = i.name
        ul.appendChild(li)
    }

  });