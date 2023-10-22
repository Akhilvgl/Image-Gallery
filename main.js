// Declare an array of image filenames
const imageFilenames = ['pic1.jpeg', 'pic2.jpeg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.jpeg'];

// Declare an object with alternative text for each image
const imageAltText = {
  'pic1.jpeg': 'car',
  'pic2.jpeg': 'car',
  'pic3.jpeg': 'car',
  'pic4.jpeg': 'car',
  'pic5.jpeg': 'car'
};

// Loop through the array of filenames and insert <img> elements into thumb-bar
const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'Images/' + imageFilenames[i]);
  newImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  thumbBar.appendChild(newImage);

  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', 'Images/' + imageFilenames[i]);
    displayedImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  });
}

// Add click event listener to darken/lighten button
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
