let btn = document.getElementById("result");
let searchInput = document.getElementById("searchInput");

let allBtn = document.getElementById("all");

const checkSearch = async (event) => {
  event.preventDefault();

  const response = await fetch("http://localhost:5500/search");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].Name == searchInput.value.toLowerCase()) {
      localStorage.setItem("searchValue", searchInput.value.toLowerCase());
      window.location.href = event.target.href;
      return;
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (searchInput.value.toLowerCase() !== data[i].Name) {
      alert("This Search Item Does Not Exist In Our API!");
      return;
    }
  }
};

btn.addEventListener("click", checkSearch);

allBtn.addEventListener("click", () => {
  localStorage.setItem("value", "accept");
});
