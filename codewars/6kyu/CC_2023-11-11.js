/* Image host filename generator

You are developing an image hosting website. You have to create a function for generating random and unique image filenames. 

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.
*/

class PhotoManager {
  constructor() {
    this.uniqueNames = new Set()
  }
  
  addName(name) {
    this.uniqueNames.add(name.toLowerCase())
  }
  
  nameExists(name) {
    return this.uniqueNames.has(name.toLowerCase())
  }
}

const photoManager1 = new PhotoManager()

function generateName() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let randomName = ''
  
  while (randomName.length < 6) {
    const n = Math.floor(Math.random() * characters.length)
    randomName += characters[n]
  }
  
  if (photoManager1.nameExists(randomName)) {
    return generateName()
  } else {
    photoManager1.addName(randomName)
    return randomName
  }
}