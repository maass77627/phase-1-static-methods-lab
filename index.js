class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

 

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "")
  }

  
  static titleize(string) {
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ]
    let completesentence = []
      let newstring = string.split(" ")
    let firstword = newstring[0].charAt(0).toUpperCase() + newstring[0].slice(1)
    completesentence.push(firstword)
   let newerstring = newstring.slice(1)
     newerstring.forEach((word) => {
      if (exceptions.includes(word)) {
        completesentence.push(word)
      } else {
        let newword = word.charAt(0).toUpperCase() + word.slice(1)
          completesentence.push(newword)
      }
      })
    
        return completesentence.join(" ")
     }
    




  }

  