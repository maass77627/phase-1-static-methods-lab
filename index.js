

  class Formatter {
    static capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
     return string.replace(/[^A-Za-z0-9 '-]/g, "")
    }

    static titleize(string) {
      let newWords = []
      let words = string.split(" ")
      let except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      for (let word of words) {
        if (except.includes(word) && words.indexOf(word) !== 0) {
          newWords.push(word)
        } else {
         let newword = word[0].toUpperCase() + word.slice(1)
          newWords.push(newword)
        }
        

      }
      return newWords.join(" ")
 }




}