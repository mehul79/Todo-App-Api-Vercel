 const randomWords = [
   "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
   "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
   "watermelon", "xigua", "yam", "zucchini", "apricot", "blueberry", "cantaloupe", "dragonfruit", "eggplant", "feijoa",
   "guava", "huckleberry", "imbe", "jackfruit", "kumquat", "lime", "mulberry", "nashi", "olive", "peach",
   "quandong", "rambutan", "salak", "tamarind", "ugni", "voavanga", "wolfberry", "ximenia", "yuzu", "ziziphus",
   "avocado", "blackberry", "clementine", "durian", "elderflower", "fig", "grapefruit", "honeyberry", "kiwano", "lychee",
   "mandarin", "naranjilla", "orange", "passionfruit", "quararibea", "redcurrant", "soursop", "tangelo", "ugli", "voavanga",
   "watermelon", "xigua", "yellow", "zucchini", "acerola", "bilberry", "cloudberry", "dewberry", "elderberry", "fingerlime",
   "gooseberry", "hackberry", "indianfig", "jabuticaba", "kiwi", "lemon", "mangosteen", "nance", "olive", "pineapple"
 ]

export function get_todos(){
  const number_of_todos = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 
  const number_of_words_in_title = Math.floor(Math.random() * (6 - 3 + 1 ) + 3)
  
  const random_idx_selector = () => {
    return Math.floor(Math.random() * randomWords.length);
  }
  
  let todos = [];
  for (let j = 0; j < number_of_todos; j++) {
    let title = "";
    let description = ""
    let id = j + 1;
    for (let i = 0; i < number_of_words_in_title; i++) {
      title += " " + randomWords[random_idx_selector()];
      description += " " + randomWords[random_idx_selector()]
    }
    todos.push({
      id: id,
      title: title.trim(),
      description: description.trim()
    });
    todos.push(`number_of_todos: ${number_of_todos}`)
  }
  
  return todos
}




