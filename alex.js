var checkChar = function(char, string){
  //if the string equals '' return zero
  if (string === "") {
    return 0;
  }
  
  //if character equals first letter in the string return 1 plus function('char', 
  //substring(starting at index1)
  if (char === string[0]){
    return 1 + checkChar(char, string.substring(1));
  }
  
  //if not equal return 0 plus plus function('char', 
  //substring(starting at index1)
  else{
    return 0 + checkChar(char, string.substring(1));
  }
  

};

identity = function(val) {
        return val;
    };
each = function(collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

console.log(checkChar("h","hitesh lala"));
dsd

