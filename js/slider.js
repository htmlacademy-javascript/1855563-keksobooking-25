const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100000,
    },
    start: 1000,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: (value) =>  parseFloat(value),
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });
};

const resetSlider = () => {
  sliderElement.noUiSlider.reset();
};

export {createSlider, resetSlider};
