const blog = document.getElementById("blog")
const link = window.location.search;
const id = new.URlSearchParams (link).get("id")

fetch("https://restcountries.com/v3.1/all")