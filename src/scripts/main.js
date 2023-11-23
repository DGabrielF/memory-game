const cards = [
  {name:"airplane",
   image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M190,115.31,217.21,89.7l.26-.26a36,36,0,0,0-50.91-50.91c-.09.08-.17.17-.26.26L140.69,66,60.1,36.71A12,12,0,0,0,47.52,39.5l-24,24A12,12,0,0,0,25.34,82l59.83,39.88L75,132H56a12,12,0,0,0-8.48,3.51l-24,24a12,12,0,0,0,4,19.62l35.23,14.1,14.06,35.14.09.22a12,12,0,0,0,19.76,3.7l23.81-23.81A12,12,0,0,0,124,200V181l10.13-10.13L174,230.65a12,12,0,0,0,18.47,1.83l24-24a12,12,0,0,0,2.79-12.59Zm-4.11,89.85L146,145.33a12,12,0,0,0-8.8-5.28A11.66,11.66,0,0,0,136,140a12,12,0,0,0-8.49,3.52l-24,24A12,12,0,0,0,100,176v19l-7.62,7.62-9.24-23.1a12,12,0,0,0-6.69-6.69l-23.1-9.24L61,156H80a12,12,0,0,0,8.48-3.51l24-24A12,12,0,0,0,110.66,110L50.84,70.12l8.24-8.25,80.83,29.39a12,12,0,0,0,12.84-3.05l30.89-32.82a12,12,0,0,1,17,17l-32.82,30.89a12,12,0,0,0-3.06,12.84l29.4,80.82Z"></path>
          </svg>`},
  {name:"alien",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M128,12A100.11,100.11,0,0,0,28,112c0,24.86,12.86,56.8,34.41,85.44C70.63,208.36,99.64,244,128,244s57.37-35.64,65.59-46.56C215.14,168.8,228,136.86,228,112A100.11,100.11,0,0,0,128,12Zm46.41,171c-13.83,18.38-34.21,37-46.41,37s-32.58-18.61-46.41-37C63.34,158.75,52,131.54,52,112a76,76,0,0,1,152,0C204,131.54,192.66,158.75,174.41,183ZM104,148a36,36,0,0,1-36-36,12,12,0,0,1,12-12,36,36,0,0,1,36,36A12,12,0,0,1,104,148Zm84-36a36,36,0,0,1-36,36,12,12,0,0,1-12-12,36,36,0,0,1,36-36A12,12,0,0,1,188,112Zm-36,72a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h24A12,12,0,0,1,152,184Z"></path>
          </svg>`},
  {name:"clock",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,176a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,204ZM32.49,64.49a12,12,0,1,1-17-17l32-32a12,12,0,1,1,17,17Zm208,0a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17l32,32A12,12,0,0,1,240.49,64.49ZM176,116a12,12,0,0,1,0,24H128a12,12,0,0,1-12-12V80a12,12,0,0,1,24,0v36Z"></path>
          </svg>`},
  {name:"stein",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M216,84H204V72a44.05,44.05,0,0,0-44-44h-9.73C137.77,17.78,121.18,12,104,12,66.5,12,36,38.92,36,72V208a20,20,0,0,0,20,20H184a20,20,0,0,0,20-20v-4h12a28,28,0,0,0,28-28V112A28,28,0,0,0,216,84ZM104,36c12.85,0,25,4.62,33.44,12.67a12,12,0,0,0,8.3,3.33H160a20,20,0,0,1,19.6,16H60.28C62.72,50,81.39,36,104,36Zm76,168H60V92H180Zm40-28a4,4,0,0,1-4,4H204V108h12a4,4,0,0,1,4,4ZM108,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Zm48,0v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0Z"></path>
          </svg>`},
  // {name:"bell",
  // image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
  //           <path d="M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z"></path>
  //         </svg>`},
  // {name:"bottle",
  // image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
  //           <path d="M248.49,39.51l-32-32a12,12,0,0,0-18.55,15L147,60.77l-37.33,7.46a12.09,12.09,0,0,0-6.14,3.28L20.2,154.83a28,28,0,0,0,0,39.6L61.57,235.8a28,28,0,0,0,39.6,0l83.32-83.31a12.09,12.09,0,0,0,3.28-6.14L195.23,109l38.23-51a12,12,0,0,0,15-18.55ZM112,191,65,144l31-31,47,47ZM81.37,220a4,4,0,0,1-2.83-1.17L37.17,177.46a4,4,0,0,1,0-5.66L48,161l47,47L84.2,218.83A4,4,0,0,1,81.37,220Zm93-123.2a12,12,0,0,0-2.17,4.85L165,138.08,160,143,113,96l5-5,36.43-7.28a12,12,0,0,0,4.85-2.17l55.67-41.76,1.29,1.29Z"></path>
  //         </svg>`},
  {name:"bird",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M176,72a16,16,0,1,1-16-16A16,16,0,0,1,176,72Zm68,8a12,12,0,0,1-5.34,10L220,102.42V120A108.12,108.12,0,0,1,112,228H12a12,12,0,0,1-9.52-19.3L92,91.93V76A64,64,0,0,1,216.58,55.29L238.66,70A12,12,0,0,1,244,80Zm-33.63,0-10.69-7.13a11.94,11.94,0,0,1-5-7A40,40,0,0,0,116,76V96a12,12,0,0,1-2.48,7.3L36.32,204H112a84.09,84.09,0,0,0,84-84V96a12,12,0,0,1,5.34-10Zm-81.74,46.48a12,12,0,0,0-16.82,2.22l-30.67,40a12,12,0,0,0,19,14.6l30.67-40A12,12,0,0,0,128.63,126.48Z"></path>
          </svg>`},
  {name:"bicycle",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M204,108a51.82,51.82,0,0,0-15.13,2.25L168.89,76H192a4,4,0,0,1,4,4,12,12,0,0,0,24,0,28,28,0,0,0-28-28H148a12,12,0,0,0-10.37,18l8.14,14H109.56L94.37,58A12,12,0,0,0,84,52H52a12,12,0,0,0,0,24H77.11L88.18,95,74,112.89a52.17,52.17,0,1,0,18.8,14.92l8.37-10.57L118,146.05A12,12,0,1,0,138.7,134L123.56,108h36.21l8.39,14.38A52,52,0,1,0,204,108ZM80,160a28,28,0,1,1-21.71-27.28l-15.7,19.83a12,12,0,0,0,18.82,14.9l15.7-19.83A27.84,27.84,0,0,1,80,160Zm124,28a28,28,0,0,1-23.11-43.79l12.74,21.84A12,12,0,0,0,214.37,154l-12.75-21.84c.79-.07,1.58-.11,2.38-.11a28,28,0,0,1,0,56Z"></path>
          </svg>`},
  {name:"butterfly",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M235.79,48c-4.27-5.48-12.4-12-26.88-12-17.86,0-40.5,11.7-60.57,31.3-3,2.89-5.74,5.85-8.34,8.84V56a12,12,0,0,0-24,0V76.14c-2.6-3-5.38-6-8.34-8.84C87.59,47.7,65,36,47.09,36c-14.48,0-22.61,6.54-26.88,12C7,65,12,93.91,19.28,122.66c5.75,22.64,17.8,33,28.88,37.69A48.12,48.12,0,0,0,92,228a47.87,47.87,0,0,0,36-16.28A48,48,0,0,0,212,180a48.51,48.51,0,0,0-4.14-19.65c11.08-4.67,23.13-15,28.88-37.69C244,93.91,249,65,235.79,48ZM92,204a24,24,0,0,1-24-24,24.36,24.36,0,0,1,21.31-24.07,12,12,0,0,0-2.64-23.86A47.63,47.63,0,0,0,65.17,140c-8.19-.29-18-4.92-22.63-23.24-7.41-29.18-8.55-47.35-3.39-54C39.74,62,41.3,60,47.09,60,58.3,60,75.91,69.83,90.9,84.47c15.25,14.9,25.1,31.86,25.1,43.2V180A24,24,0,0,1,92,204Zm121.45-87.25C208.81,135.07,199,139.7,190.82,140a47.54,47.54,0,0,0-21.51-7.92,12,12,0,1,0-2.64,23.86A24.36,24.36,0,0,1,188,180a24,24,0,1,1-48,0V127.67c0-11.34,9.85-28.3,25.1-43.2C180.09,69.83,197.7,60,208.91,60c5.79,0,7.35,2,7.94,2.76C222,69.4,220.87,87.57,213.46,116.75Z"></path>
          </svg>`},
  {name:"beetle",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
            <path d="M224,152a12,12,0,0,0,0-24H212V112h12a12,12,0,0,0,0-24H210.45a83.7,83.7,0,0,0-18.78-38.7l16.82-16.81a12,12,0,0,0-17-17l-18,18a83.7,83.7,0,0,0-91.1,0l-18-18a12,12,0,0,0-17,17L64.33,49.3A83.7,83.7,0,0,0,45.55,88H32a12,12,0,0,0,0,24H44v16H32a12,12,0,0,0,0,24H44a83.55,83.55,0,0,0,1.55,16H32a12,12,0,0,0,0,24H54.15a84,84,0,0,0,147.7,0H224a12,12,0,0,0,0-24H210.45A83.55,83.55,0,0,0,212,152ZM128,44a60.1,60.1,0,0,1,57.82,44H70.18A60.1,60.1,0,0,1,128,44Zm12,166.79V140a12,12,0,0,0-24,0v70.79A60.09,60.09,0,0,1,68,152V112H188v40A60.09,60.09,0,0,1,140,210.79Z"></path>
          </svg>`},
  {name:"cactus",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
          <path d="M216,204H172V188a72.08,72.08,0,0,0,72-72,32,32,0,0,0-64,0,8,8,0,0,1-8,8V56a44,44,0,0,0-88,0V84a8,8,0,0,1-8-8,32,32,0,0,0-64,0,72.08,72.08,0,0,0,72,72v56H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM96,124H84A48.05,48.05,0,0,1,36,76a8,8,0,0,1,16,0,32,32,0,0,0,32,32H96a12,12,0,0,0,12-12V56a20,20,0,0,1,40,0v80a12,12,0,0,0,12,12h12a32,32,0,0,0,32-32,8,8,0,0,1,16,0,48.05,48.05,0,0,1-48,48H160a12,12,0,0,0-12,12v28H108V136A12,12,0,0,0,96,124Z"></path>
        </svg>`},
  {name:"egg",
  image:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#f4f1f1" viewBox="0 0 256 256">
          <path d="M216,152a88.11,88.11,0,0,1-87.8,88c-50.66.12-90.21-43-88.12-93.62,1.21-29.21,11.71-60.54,29.23-86.82C87.5,32.29,109.43,16,128,16c13.25,0,28.23,8.32,42.34,23a4,4,0,0,1,.09,5.44L122,98.67a8,8,0,0,0,4,13.09l24.61,6.15-6.51,32.52a8,8,0,0,0,6.28,9.41A7.7,7.7,0,0,0,152,160a8,8,0,0,0,7.83-6.43l8-40a8,8,0,0,0-5.9-9.33l-19.16-4.79,36.89-41.33a4,4,0,0,1,6.29.41c.24.34.47.68.7,1C205.3,87.54,216,121.23,216,152Z"></path>
        </svg>`}        
]
const state = {
  views: {
    gamePage: document.querySelector(".game"),
    result: document.querySelector(".score"),
    resetButton: document.querySelector(".reset"),
  },
  values:{
    firstClicked: null,
    secondClicked: null,
    tries: 0,
    hits: 0
  }
}
const cardsDuplicated = [...cards, ...cards];

let shuffleCards = cardsDuplicated.sort(() =>  (Math.random() > 0.5 ? 2 : -1));

for (let i=0; i<cardsDuplicated.length; i++) {
  const box = document.createElement("div")
  box.className = "item",
  box.innerHTML = shuffleCards[i].image;
  box.name = shuffleCards[i].name
  box.key = i;
  box.onclick = e => handleClick(box);
  state.views.gamePage.appendChild(box)
}

function handleClick (item) {
  if (!state.values.firstClicked) {
    item.classList.add("box-open")
    state.values.firstClicked = item
  } else if (!state.values.secondClicked && item.key!==state.values.firstClicked.key) {
    item.classList.add("box-open")
    state.values.secondClicked = item
  }
  if (state.values.firstClicked && state.values.secondClicked) {
    if (state.values.firstClicked.name === state.values.secondClicked.name) {
      if (state.values.firstClicked.key !== state.values.secondClicked.key) {
        state.values.hits++
        if (state.values.hits===10) {
          state.views.gamePage.classList.add("win-game-page")
          state.views.resetButton.classList.add("win-button");
        }
        state.values.firstClicked = null;
        state.values.secondClicked = null;
      }
    } else {
      setTimeout(() => {
        state.values.firstClicked.classList.remove("box-open");
        state.values.secondClicked.classList.remove("box-open");

        state.values.firstClicked = null;
        state.values.secondClicked = null;
      }, 500);
    }
    state.values.tries++
    state.views.result.textContent = state.values.tries
  }
}

