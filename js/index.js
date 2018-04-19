const picturesContainer = document.querySelector('.block-picture');
const pictureList = picturesContainer.querySelectorAll('.a');
const form = document.querySelector('.form');
const formImg = form.querySelector('.form__img');
const btnClose = form.querySelector('.form__btn-close');
const btnReturn = document.querySelector('.btn-return');
const score = document.querySelector('.score')

const initialScoreLength = function(startValue) {
  score.textContent = startValue;
}

initialScoreLength(pictureList.length)

const updateScoreLength = function(type) {
  switch(type) {
    case 'plus': {
      score.textContent = parseInt(score.textContent) + 1
    }
    case 'minus': {
      score.textContent = parseInt(score.textContent) - 1
    }
  }
}

btnClose.addEventListener('click', function (evt) {
  form.style.display = "none";
})

Array.prototype.forEach.call(pictureList, function (picture, index) {
  const btnDelete = picture.querySelector('.btn');
  const image = picture.querySelector('.block-picture__img');

  btnDelete.addEventListener('click', function () {
    picturesContainer.removeChild(pictureList[index]);
    updateScoreLength('minus');
  });

  image.addEventListener('click', function (evt) {
    formImg.src = image.src
    form.style.display = "block";
  });
})


btnReturn.addEventListener('click', function () {
  picturesContainer.innerHTML = '';

  Array.prototype.forEach.call(pictureList, function(picture) {
    picturesContainer.appendChild(picture);
  });

  initialScoreLength(pictureList.length);
});
