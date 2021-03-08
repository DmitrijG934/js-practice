const generateColor = () => Math.floor(Math.random() * 16777215).toString(16);

const createHeading = textContent => {
    let h1 = document.createElement('h1');
    h1.textContent = textContent;
    return h1;
};

const changeDefaultStyle = node => {
    const style = node.style;
    style.textAlign = 'center';
    style.color = `#${generateColor()}`;
    style.padding = '2rem';
    style.backgroundColor = `#${generateColor()}`;
};

const firstHeading = createHeading('Hello');
const secondHeading = createHeading('My name is');
const thirdHeading = createHeading('GAY!!!');

changeDefaultStyle(firstHeading);
changeDefaultStyle(secondHeading);
changeDefaultStyle(thirdHeading);

const headings = [firstHeading, secondHeading, thirdHeading];
headings.forEach(heading => {
    heading.onclick = () => {
        heading.style.color = `#${generateColor()}`;
        heading.style.backgroundColor = `#${generateColor()}`;
    }
});

setTimeout(() => document.body.appendChild(headings[0]), 1000);
setTimeout(() => document.body.appendChild(headings[1]), 2000);
setTimeout(() => document.body.appendChild(headings[2]), 3000);
