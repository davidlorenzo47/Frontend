/* 4. give a string “cvs health”, change it to “Cvs Health” */
const capitalFirstLetter = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  /* test */
  const str2 = 'cvs health';
  console.log('capitalFirstLetter: ', capitalFirstLetter(str2));