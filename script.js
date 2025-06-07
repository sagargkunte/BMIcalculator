const form = document.querySelector('form');


form.addEventListener('submit',(e) => {
    e.preventDefault();
    const height = document.querySelector('#height').value;
    const width = document.querySelector("#width").value;
    console.log(height);
    console.log(width);
});