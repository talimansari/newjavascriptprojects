const addBtn = document.querySelector("#add");
const row = document.getElementById("row");


const updateLSData = () => {
  const textarea = document.querySelectorAll("textarea");
  const notes = [];
  textarea.forEach((note) => {
    return notes.push(note.value);
  })
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes))
}


const addNewNote = (text = "") => {

  const note = document.createElement("div");
  note.classList.add("col-md-4");
  const htmldata =
    `<div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between"><h5 class="card-title">Title</h5>
        <ul class="d-flex">
          <li><i class="fa fa-pencil-square-o" id="edit" aria-hidden="true"></i></li>
          <li><i class="fa fa-trash-o" id="delete" aria-hidden="true"></i></li>
      </ul></div>
      <p id="para" class="${text ? "" : "hide"}"></p>
     <textarea class="${text ? "hide" : ""}"></textarea>
    </div>
  </div>`
  note.insertAdjacentHTML("afterbegin", htmldata)
  row.appendChild(note);
  const editBtn = note.querySelector("#edit")
  const deleteBtn = note.querySelector("#delete");
  const textarea = note.querySelector("textarea");
  const para = note.querySelector("#para")
  textarea.value = text;
  para.textContent = text;

  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLSData();
  })
  editBtn.addEventListener("click", () => {
    para.classList.toggle("hide");
    textarea.classList.toggle("hide");
  })
  textarea.addEventListener("change", (event) => {
    const value = event.target.value
    para.textContent = value;
    updateLSData();
  })
}
// localStorage.getItem("notes")
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNewNote(note))
}
addBtn.addEventListener("click", () => addNewNote())
const mainPara = document.querySelector(".main");

const handlechange = () => {
  const writeItem = document.querySelector("#writeItem").value;
  const selectItem = document.querySelector("#selectItem").value;

  mainPara.textContent = `${writeItem}'s role number is ${selectItem}`
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}


function CopyToClipboard(sc) {
  var r = document.createRange();
  r.selectNode(document.getElementById(sc));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
// timing based events

const count = document.querySelector('#count');
const startbtn = document.querySelector('#startbtn');
const stopbtn = document.querySelector('#stopbtn');
let countNum = 0;
let stopcount;

const showCount = () => {
  count.textContent = "Loading....";
  stopcount = setInterval(() => {
    count.textContent = countNum;
    countNum++;
  }, 1000)
}

startbtn.addEventListener("click", showCount)
stopbtn.addEventListener("click", () => {
  clearTimeout(stopcount);
})


// FILTER MENUS
const menu = [
  {
    id: 1,
    category: "breakfast",
    title: "BreakFast 1",
    image: "./image/breakfast-img/breakfast1.jpg",
    price: "$18.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,


  }, {
    id: 2,
    category: "breakfast",
    title: "BreakFast 2",
    image: "./image/breakfast-img/breakfast2.jpg",
    price: "$19.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 3,
    category: "breakfast",
    title: "BreakFast 3",
    image: "./image/breakfast-img/breakfast3.jpg",
    price: "$12.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 4,
    category: "breakfast",
    title: "BreakFast 4",
    image: "./image/breakfast-img/breakfast4.jpg",
    price: "$21.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 5,
    category: "breakfast",
    title: "BreakFast 5",
    image: "./image/breakfast-img/breakfast5.jpg",
    price: "$22.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 6,
    category: "breakfast",
    title: "BreakFast 6",
    image: "./image/breakfast-img/breakfast6.jpg",
    price: "$23.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 7,
    category: "breakfast",
    title: "BreakFast 7",
    image: "./image/breakfast-img/breakfast7.jpg",
    price: "$15.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 8,
    category: "lunch",
    title: "Lunch 1",
    image: "./image/lunch-img/lunch1.jpg",
    price: "$21.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 9,
    category: "lunch",
    title: "Lunch 2",
    image: "./image/lunch-img/lunch2.jpg",
    price: "$22.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 10,
    category: "lunch",
    title: "Lunch 3",
    image: "./image/lunch-img/lunch3.jpg",
    price: "$23.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 11,
    category: "lunch",
    title: "Lunch 4",
    image: "./image/lunch-img/lunch4.jpg",
    price: "$19.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 12,
    category: "lunch",
    title: "Lunch 5",
    image: "./image/lunch-img/lunch5.jpg",
    price: "$9.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 13,
    category: "lunch",
    title: "Lunch 6",
    image: "./image/lunch-img/lunch6.jpg",
    price: "$8.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 14,
    category: "lunch",
    title: "Lunch 7",
    image: "./image/lunch-img/lunch7.jpg",
    price: "$14.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 15,
    category: "lunch",
    title: "Lunch 8",
    image: "./image/lunch-img/lunch8.jpg",
    price: "$20.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 16,
    category: "lunch",
    title: "Lunch 9",
    image: "./image/lunch-img/lunch9.jpg",
    price: "$21.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 17,
    category: "lunch",
    title: "Lunch 10",
    image: "./image/lunch-img/lunch10.jpg",
    price: "$16.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 18,
    category: "dinner",
    title: "Dinner 1",
    image: "./image/dinner/dinner1.jpg",
    price: "$10.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 19,
    category: "dinner",
    title: "Dinner 2",
    image: "./image/dinner/dinner2.jpg",
    price: "$11.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 20,
    category: "dinner",
    title: "Dinner 3",
    image: "./image/dinner/dinner3.jpg",
    price: "$13.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 21,
    category: "dinner",
    title: "Dinner 4",
    image: "./image/dinner/dinner4.jpg",
    price: "$17.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 22,
    category: "dinner",
    title: "Dinner 5",
    image: "./image/dinner/dinner5.jpg",
    price: "$19.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 23,
    category: "dinner",
    title: "Dinner 2",
    image: "./image/dinner/dinner6.jpg",
    price: "$22.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  },
  {
    id: 24,
    category: "dinner",
    title: "Dinner 2",
    image: "./image/dinner/dinner7.jpg",
    price: "$23.99",
    des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
   when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,

  }
]

const itemSection = document.querySelector(".item-section");
const tabBtn = document.querySelectorAll(".fil-btn");

// onload
window.addEventListener("DOMContentLoaded", () => {
  setAllItems(menu);
});
// filter arrey
tabBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const Catogery = e.currentTarget.dataset.id;
    const fltredItem = menu.filter((menuItem) => {
      if (menuItem.category === Catogery) {
        return menuItem;
      }
    })
    if (Catogery === "all") {
      setAllItems(menu);
      console.log(menu);
    } else {
      setAllItems(fltredItem)
    }
  })
})
//  display items
function setAllItems(menuAllItem) {
  let menuItem = menuAllItem.map((item) => {
    return (
      `<div class="col-md-6 mb-3">
         <div class="card">
           <img class="card-img-top card-height" src="${item.image}" alt="food">
           <div class="card-body">
             <div class="d-flex justify-content-between"><h4 class="card-title font-weight-bold">${item.title}</h4>
              <span class="text-info font-weight-bold">${item.price}</span></div>
             <p class="card-text">${item.des}</p>
           </div>
         </div>
       </div>`
    );
  })
  menuItem = menuItem.join("")
  itemSection.innerHTML = menuItem
}
// create tabs in vanilla javascript

const tabsBtn = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");



tabsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    
    content.forEach((all) => {
      all.classList.remove("active");
    })
    const element = document.getElementById(id)
     element.classList.add("active");
  })
})


const text = [
  `I love using the five-paragraph model for writing. I can find three points to argue for or exemplify just about
  any topic imaginable. Cats are good pets because they’re good companions, they’re clean, and they’re easy to
  care for. Jaws is a classic film because of its acting, its cinematography, and its musical score. Three examples
  of the U.S. government’s checks and balances are its executive branch, its legislative branch, and its judicial
  branches. The five-paragraph model is a valuable tool for many writing situations because it structures my
  writing, it aids my readers, and it is versatile.`,
  `One advantage of the five-paragraph model is that it structures what I write. Before I learned the five-paragraph
  recipe, I’d either stare at a blank screen or I’d write one big block of text; now, I know to first identify three
  examples, reasons, or other supporting pieces of evidence. Then, I develop those three examples, reasons, or
  pieces of evidence into its own paragraph. I write a thesis statement based off those three examples, reasons, or
  pieces of evidence; I flesh out my introduction with a hook; and I write a conclusion paragraph. Following the
  five-paragraph model makes my writing tasks considerably less intimidating.`,
  `I am a movie fanatic. When friends want to know what picture won the Oscar in 2001, they ask me. When
  friends want to know who voiced Optimus Prime in Transformers, they ask me. However, my buddies have
  stopped asking me if I want to go out to the movies. While I love movies as much as ever, I find it more
  enjoyable to wait for a movie’s release on Netflix because of the inconvenience of going out, the temptations of
  the concession stand, and the behavior of some patrons.`,
  `First of all, just getting to the theater presents difficulties. Leaving a home equipped with an HDTV and
  surround sound isn't attractive on a cold or rainy night. Even if the weather cooperates, there is the hassle of
  looking for a parking space and the lines. There is also the worry of whether you and your friends will get all
  your seats together. Although none of these hindrances are insurmountable, it’s much easier to stay seated on
  your sofa.`,
  `Man's best friend has historically been considered a dog. But dogs are not the only animal friend whose
  camaraderie people enjoy. For many people, a cat is their best friend. Despite what dog lovers may believe, cats
  make excellent house pets because they are good companions, they are civilized members of the household, and
  they are easy to care for.`,
  `Cats are good companions. They will snuggle up and ask to be petted or scratched under the chin, and who can
  resist a purring cat? If they're not feeling affectionate, cats are generally quite playful; they love to chase balls
  and feathers — or just about anything dangling from a string. And when they’re tired from chasing laser
  pointers, cats will curl up in your lap to nap. Cats are loyal housemates.`,
  `Everywhere people turn -- websites, magazines, and infomercials -- advice for improving health bombards
  them. Much of this advice is commercially motivated by those eager to sell questionable supplements and diet
  gimmicks. However, some of it, especially that advocating a regular exercise program, merits serious attention.
  Such a program, if it consists of at least thirty minutes three times a week and if a person's physician approves
  it, provides numerous benefits.`,
  `The famed inventor, Thomas Edison, rose to prominence in the late 19th century because of his successes, but
  even he felt that these successes were the result of many failures. He did not succeed in his work on one of his
  most famous inventions, the lightbulb, on his first try nor even on his hundred and first try. In fact, it took him
  more than 1,000 attempts to make the first incandescent bulb but, along the way, he learned quite a lot. As he
  said, “I did not fail a thousand times but instead succeeded in finding a thousand ways it would not work.”
  Thus, Edison demonstrated both in thought and action how instructive mistakes can be.`,
  `The road to contemporary success for the 19th century artist Vincent van Gogh was even more dramatically
  paved with failure. In current day, van Gogh is considered one of the most celebrated painters of all time.
  However, during his lifetime, he was considered a disappointment. In current day, his paintings can sell for
  millions of dollars, but he struggled to sell his paintings when he was alive. He even took to burning several of
  his paintings because they would not sell.`,
  `John Stossel wrote two compelling articles, “Worry About the Right Things” and “The Media Likes Scaring
  Us,” about how American media focuses on feed our fear. It is not surprising that the news hand-picks stories
  that are rare but extreme. The news today is focused on entertaining to keep the public’s short attention to
  achieve their desired amount of views. Often these stories “hype” up a fear that is statistically improbable but
  has had a few occurrences. We see examples of media fear mongering in the coverage of bird flu, plane crashes,
  and video games leading to violence.`
]

const formSection = document.querySelector(".form-section");
const amount = document.getElementById("amount");
const result = document.querySelector(".gen-result");



formSection.addEventListener("submit", (e) => {
  e.preventDefault();
  value = parseInt(amount.value)
  //  empty             value in minu   value above 10     
  if (isNaN(value) || value <= 0 || value > 10) {
    result.innerHTML = `<p class="gern_text">${text[0]}</p>`
  } else {
    let selectText = text.slice(0, value);
    selectText = selectText.map((item) => {
      return `<p class="gern_text">${item}</p>`;
    }).join("");

    result.innerHTML = selectText;
  }
})
// crud oprator project
const crudForm = document.querySelector(".crud-form");
const crudInput = document.querySelector("#crud-input");
const submitButton = document.querySelector(".Submit-btn");
const crudContainer = document.querySelector(".crud-container");
const Itemlist = document.querySelector(".crud-list");
const alert = document.querySelector('.alert');
const clearBtn = document.querySelector(".clear-btn");


// edit option
let editElement;
let editFlag = false;
let editID = "";


const addCrudItem = (e) => {
  e.preventDefault();
  const value = crudInput.value;
  const id = new Date().getTime();
  if (value && !editFlag) {
    const article = document.createElement('article');
    article.classList.add('crud-item');
    article.setAttribute("dataset", id);
    article.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <button type="button" class="delete-btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>`;
    const deleteBtn = article.querySelector('.delete-btn');
    const editBtn = article.querySelector('.edit-btn');
    deleteBtn.addEventListener('click',deleteItem);
    editBtn.addEventListener('click',editItem);
    Itemlist.appendChild(article)
    displayAlert("Add Item","success")
    backToDefault()
    crudContainer.classList.add("show-container")
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Edit Item","success")
    backToDefault();
  } else {
    console.log("Empty value");
  }
}
const clearAllItem = () => {
  const items = document.querySelectorAll(".crud-item");
  if(items.length > 0){
    items.forEach((item)=>{
      Itemlist.removeChild(item);
    })
  }
  displayAlert("All Item Clear","danger");
  crudContainer.classList.remove("show-container");
  backToDefault();
}
// deleteItem
function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   element.remove();
   if(Itemlist.children.length <= 0){
    element.remove();
    crudContainer.classList.remove("show-container");
  }
   displayAlert("Deleted Item","danger")
 }
// editItem 
function editItem(e){
  editElement = e.currentTarget.parentElement.previousElementSibling;
  crudInput.value = editElement.innerHTML;
  editFlag = true;
  submitButton.innerHTML = "edit";
}
// add item 
crudForm.addEventListener("submit", addCrudItem);
// clear button
clearBtn.addEventListener('click',clearAllItem)

// ALert function
const displayAlert = (text,action) => {
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`)
    setTimeout(function(){
      alert.innerHTML = "";
      alert.classList.remove(`alert-${action}`)
    },1000)
}
 const backToDefault = () => {
  crudInput.value = "";
  editFlag  = false;
  submitButton.innerHTML = "submit";
 }
// Slider Project

const slides = document.querySelectorAll(".slides");
const sliderBtn = document.querySelectorAll('.slider-btn');


slides.forEach((slide,index)=>{
  slide.style.left = `${index * 100}%`
});
let counter = 0;

sliderBtn.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    if(e.currentTarget.classList.contains("prev")){
        counter--
        carasoul()
    }     
    if(e.currentTarget.classList.contains('next')){
         counter++
        carasoul()
    }
    
  })
})


function carasoul () {
  if(counter === slides.length){
    counter = 0;
  }
  if(counter < 0){
    counter = slides.length - 1;
  }
  slides.forEach((slide)=>{
  slide.style.transform =`translateX(-${counter * 100}%)`
  })
}