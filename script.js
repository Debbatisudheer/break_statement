// JavaScript for search functionality
const searchInput = document.getElementById('searchInput');
const songList = document.getElementById('songList');
const songs = document.querySelectorAll('.songItem');
const noResultMessage = document.getElementById('noResultMessage');

// Function to normalize search term
function normalizeSearchTerm(term) {
  return term.trim().toLowerCase().replace(/\s+/g, '');
}

// Function to highlight matched parts
function highlightMatchedText(text, term) {
  const startIndex = text.toLowerCase().indexOf(term.toLowerCase());
  if (startIndex !== -1) {
    const beforeMatch = text.substring(0, startIndex);
    const matchedText = text.substring(startIndex, startIndex + term.length);
    const afterMatch = text.substring(startIndex + term.length);
    return `${beforeMatch}<span class="matched">${matchedText}</span>${afterMatch}`;
  }
  return text;
}

searchInput.addEventListener('input', function() {
  const searchTerm = normalizeSearchTerm(this.value);

  let found = false;

  songs.forEach(song => {
    const songTitle = song.textContent;
    const normalizedSongTitle = normalizeSearchTerm(songTitle);
    if (normalizedSongTitle.includes(searchTerm)) {
      song.innerHTML = highlightMatchedText(songTitle, searchTerm);
      song.style.display = 'block';
      found = true;
    } else {
      song.style.display = 'none';
    }
  });

  if (!found) {
    noResultMessage.style.display = 'block';
  } else {
    noResultMessage.style.display = 'none';
  }
});