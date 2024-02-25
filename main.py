# Example list of songs
songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5", "Song 6"]

# User's search query
search_query = "Song 10"

# Flag to indicate whether the song is found
song_found = False

# Search loop
for song in songs:
    if song == search_query:
        print("Song found:", song)
        song_found = True
        # Perform further actions if needed
        break  # Exit the loop once the song is found

# Check if the song was not found
if not song_found:
    print("Song not found")

