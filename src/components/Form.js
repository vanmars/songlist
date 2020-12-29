import React, { useState } from 'react';

const NewSongForm = () => {
  return ( 
    <form>
      <label>Song Name:</label>
      <input type='text' requited />
      <input type='submit' value='Add Song' />
    </form>
   );
}
 
export default NewSongForm;