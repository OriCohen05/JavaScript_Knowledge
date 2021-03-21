//Return command
function LearnToReturn() {
    //Ex8

    function SumTwoValues(x, y) {
        var sum = x + y;
        return sum;
    }
    var sum = SumTwoValues(5, 4);
    alert(sum);


    //Ex9
    function FindDifference(x, y) {
        var diff = x - y; // הפרש
        if (diff < 0) {
            return diff * -1;
        } else {
            return diff;
        }
    }
    var diff = FindDifference(5, 5);
    alert(diff);


    //Ex10
    function SumEvenValuesUpToX(x) {
        var cnt = 0;
        for (var i = 2; i < x; i++) {
            if (i % 2 == 0) {
                cnt = cnt + i;
            }

        }
        return cnt;
    }
    var zimun = SumEvenValuesUpToX(6);
    alert(zimun);

    //Ex11
    function FindMaxValue(x) {

        var input = 0;
        var firstInput = prompt("Please type the first variable");
        var firstInputNum = parseInt(firstInput);
        var max = firstInputNum;
        var theInt = 0;
        for (var i = 2; i <= x; i++) {
            input = prompt("Please type the " + i + "variable");
            theInt = parseInt(input);
            if (theInt > max) {
                max = theInt;
            }


        }
        return max;
    }

    var tel = FindMaxValue(5);
    alert(tel);

    //Ex12

    function FindExtremesDifference(x) {
        var input = parseInt(input);
        var firstInput = prompt("Please type the first variable");
        firstInput = parseInt(firstInput);
        var min = firstInput;
        var int = 0;
        var max = firstInput;
        for (var i = 2; i <= x; i++) {
            input = prompt("Please type the " + i + " var: ");
            int = parseInt(input);
            if (min > input) {
                min = input;
            }
            if (int > max) {
                max = int;
            }
        }

        return max - min;

    }
    var tel = FindExtremesDifference(5);
    alert(tel);


    //Ex13
    function ConcatStrings(x) {
        var gath = prompt("Please type the first string: ");
        var secondInput = "";
        for (var i = 2; i <= x; i++) {
            secondInput = prompt("Please type the " + i + " input");
            gath = gath + " " + secondInput + " ";
        }
        return gath;
    }
    var tel = ConcatStrings(5);
    console.log(tel);
}