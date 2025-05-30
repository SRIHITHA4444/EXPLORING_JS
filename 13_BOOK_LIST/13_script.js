const btn = document.querySelector('.btn');

const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year'); 

const bookList = document.getElementById('book-list');

btn.addEventListener('click', function (et) {
  et.preventDefault();  

  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const yearVal = year.value.trim();

  if(titleVal && authorVal && yearVal){
    const bookSection = document.createElement('section');

    let append = [titleVal, authorVal, yearVal];

    append.forEach((ele) => {
      const div = document.createElement('div');
      div.innerHTML = ele;
      bookSection.appendChild(div);
    })

    bookList.appendChild(bookSection);

    let reset = [title, author, year]

    reset.forEach((ele) => {
      ele.value = "";
    });
    
  }

  else{
    alert ('Enter valid book name, author name and year!');
  }
  
});
