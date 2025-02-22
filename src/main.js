function submitResult() {

    let firstWord = document.getElementById('firstWord').value;
    let secondWord = document.getElementById('secondWord').value;

    if (firstWord === '' || secondWord === '') {
        document.getElementById('result').innerHTML = 'Please enter both words!';
        document.getElementById('result').style.color = 'orange';
        result; // Stops the execution
    }


    // This will run if both words were entered.
    firstWord = firstWord.toLowerCase().split('').sort().join('');
    secondWord = secondWord.toLowerCase().split('').sort().join('');

    let result = firstWord === secondWord;

    if (result === true) {
        document.getElementById('result').innerHTML = 'A valid anagram!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').innerHTML = 'Not a valid anagram :(';
        document.getElementById('result').style.color = 'red';
    } 
}