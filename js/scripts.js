window.addEventListener("load", function () {
  const firstH1OnPage = document.querySelector("h1");
  const secondH1OnPage = document.createElement("h1");
  const thirdH1OnPage = document.createElement("h1");
  const papaElement = document.createElement("p");
  const imgElement = document.createElement('img');
  const ulElement = document.createElement('ul');
  const liElement1 = document.createElement('li');
  const liElement2 = document.createElement('li');
  const h2Element = document.createElement('h2');
  const aTagElement = this.document.createElement('a');

// HIDE THE FIRST H1

  firstH1OnPage.remove();

  secondH1OnPage.innerText = "Webpage Recreation Practice";
  papaElement.innerText = "The HTML of this webpage was created with JavaScript.";
  imgElement.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  imgElement.setAttribute('width', '50%');
  thirdH1OnPage.innerText = "Facts about the Multicolored Tanager";
  liElement1.innerText = "It is endemic to the mountains of Colombia.";
  liElement2.innerText = "It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.";
  h2Element.innerText = "Source";
  aTagElement.href = "https://en.wikipedia.org/wiki/Multicoloured_tanager";
  aTagElement.innerText = "wiki";

  //this can also be apprend not just apprendChild
  document.body.appendChild(secondH1OnPage);
  document.body.appendChild(papaElement);
  document.body.appendChild(imgElement);
  document.body.appendChild(thirdH1OnPage);
  document.body.appendChild(liElement1);
  document.body.appendChild(liElement2);
  document.body.appendChild(h2Element);
  document.body.appendChild(aTagElement);











});