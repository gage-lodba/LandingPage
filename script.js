const inputs = document.querySelectorAll('input');
const urls = {
  'link #1': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'link #2': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'link #3': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}

inputs.forEach(input => {
  input.addEventListener('click', () => {
    const value = input.value.toLowerCase();
    window.location.href = urls[value];
  })
});