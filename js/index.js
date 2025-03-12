const DATA = [];
const content = document.getElementById("content");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((melumat) => {
    DATA.push(...melumat);

    show();
  });

function show() {
  DATA.forEach((item) => {
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
                        class="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">${item.name.common}</a>
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
show();
