const DATA = [];
const content = document.getElementById("content");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((melumat) => {
    DATA.push(...melumat);

    showCard();
  });
let count = 8;
function showCard() {
  content.innerHTML = "";
  DATA.slice(0, count).forEach((item) => {
    content.innerHTML += `
             <article class="flex flex-col dark:bg-gray-50">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" class="object-cover w-full h-52 dark:bg-gray-500"
                        src="${item.flags.svg}">
                </a>
                <div class="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#"
                        aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#"
                        class="text-xl tracking-wider uppercase hover:underline dark:text-violet-600">${item.name.common}</a>
                    <h3 class="flex-1 py-2 text-xs font-semibold leading-snug">${item.capital}</h3>
                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                        <span>June 1, 2020</span>
                        <span>2.1K views</span>
                    </div>
                </div>
            </article>
        `;
  });
}
showCard();
function elvaeEt() {
  count += 8;
  console.log(count);
  showCard();
}
document.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    window.location.href = "newPage.html";
  }
});

// newPageCard
const newPageCard = document.getElementById("newPageCard");
function showDetail() {
  newPageCard.innerHTML = "";
  DATA.slice(0, count).forEach((item) => {
    newPageCard.innerHTML += `
  <div class="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" class="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500">
	<div class="mt-6 mb-2">
		<span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
		<h2 class="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
	</div>
	<p class="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
    `;
  });
  showDetail();
}
