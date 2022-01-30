import { Note } from 'src/models/note.interface';

export const NoteComponent = {
  createRepresentation: (note: Note): void => {
    const noteAnchor = document.querySelector(`[data-note=${note.noteId}]`);
    const noteAnchorNode = noteAnchor?.parentNode;
    const noteElement = document.createElement('div');

    noteElement.className = 'note';
    noteElement.innerText = note.displayText;

    noteAnchorNode?.insertBefore(noteElement, noteAnchor);
  },
};
