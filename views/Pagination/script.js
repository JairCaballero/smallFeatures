const ulTag = document.querySelector("ul");
let totalPages = 20;

function element(totalPages, page) {
  let liTag = '';
  let activeLi;
  const maxVisiblePages = 8;

  if (page > 1) {
    liTag += `<li class="btn prev" onclick="element(${totalPages}, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev </span></li>`;
  }

  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let pageLength = startPage; pageLength <= endPage; pageLength++) {
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(${totalPages}, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(${totalPages}, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  ulTag.innerHTML = liTag;
}

element(totalPages, 1);
