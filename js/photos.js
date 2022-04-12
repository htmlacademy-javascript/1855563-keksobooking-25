const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhotoAds = document.querySelector('.ad-form__upload input[type=file]');
const previewPhotoAds = document.querySelector('.ad-form__photo');

const initLoadPhoto = () => {
  fileChooserAvatar.addEventListener('change', () => {
    const file = fileChooserAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewAvatar.src = URL.createObjectURL(file);
    }
  });

  fileChooserPhotoAds.addEventListener('change', () => {
    const filePhotoAds = fileChooserPhotoAds.files[0];
    const fileNamePhotoAds = filePhotoAds.name.toLowerCase();

    const matchesPhotoAds = FILE_TYPES.some((it) => fileNamePhotoAds.endsWith(it));

    if (matchesPhotoAds) {
      previewPhotoAds.style.backgroundImage = `url(${URL.createObjectURL(filePhotoAds)})`;
      previewPhotoAds.style.backgroundSize = 'cover';
    }
  });

};

export {initLoadPhoto};
