// Get the select dropdown element
const backgroundexample = document.getElementById('images-list');

// Add an event listener for change events
backgroundexample.addEventListener('change', (event) => {
  // Get the selected value
  const selectedValue = event.target.value;

  // Access the div with the ID 'backgroundexample'
  const div = document.getElementById('backgroundexample');

  // Update the background based on the selected value
  switch (selectedValue) {
    case 'simple':
      div.style.background = "url('./imagenes/background1.webp') no-repeat center center/cover";
      div.innerHTML = ".background-simple{ <br> background-image: url(./images/background1.webp); <br> background-repeat: no-repeat; <br> background-size: cover; <br> background-position: center; <br> } "
      div.style.color = "black"
      break;
    case 'repeat':
      div.style.background = "url('./imagenes/background2.jpeg') repeat center ";
      div.innerHTML = ".background-pattern{ <br> background-image: url(./images/background2.jpeg); <br> background-repeat: repeat; <br> background-size: cover; <br> background-position: center; <br> } "
      div.style.color = "white"
      break;
    case 'no-repeat':
      div.style.background = "url('./imagenes/background3.jpeg') no-repeat center center/contain";
      div.innerHTML = ".background-no-repeat{ <br> background-image: url(./images/background3.jpeg); <br> background-repeat: no-repeat; <br> background-size: contain; <br> background-position: center; <br> } "
      div.style.color = "#ecf02f"
      break;
    case 'gradient':
      div.style.background = "linear-gradient(to top, blue, purple, red, orange, pink)";
      div.innerHTML = ".background-gradient{ <br> background-image: linear-gradient(to top, blue, purple, red, orange, pink); <br> background-repeat: no-repeat; <br> background-size: cover; <br> background-position: center; <br> } "
      div.style.color = "black"
      break;
    default:
      div.style.background = "white"; // Default background
      div.innerHTML = ".default{ <br> background-image: none; <br> background-color: white; <br> color: blue <br> }"
      div.style.color = "blue"
      break;
  }
});
