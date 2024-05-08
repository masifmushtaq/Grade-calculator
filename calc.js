let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let math = parseInt(document.getElementById('math').value);
    let eng = parseInt(document.getElementById('eng').value);
    let urdu = parseInt(document.getElementById('urdu').value);
    let bio = parseInt(document.getElementById('bio').value);
    let chem = parseInt(document.getElementById('chem').value);

    // check if any field is empty
    if (math == "" || eng == "" || urdu == "" || bio == "" || chem == "") {
        document.getElementById('alert').style.display = 'block';

    }
    else {
        if (math >= 100 || eng >= 100 || urdu >= 100 || bio >= 100 || chem >= 100) {
            document.getElementById('alert').style.display = 'block';
        }
        // obtain marks
        else {
            let sum = math + chem + urdu + eng + bio;
            document.getElementById('obtain').innerText = sum;
            // percentage of marks
            let percentage = sum / 500 * 100;
            document.getElementById('percentage').innerText = Math.ceil(percentage) + ("%");
            // grade calculate
            if (percentage >= 90) {
                document.getElementById('grade').innerText = "A+";

            }
            else if (percentage >= 80) {
                document.getElementById('grade').innerText = "A";
            }
            else if (percentage >= 70) {
                document.getElementById('grade').innerText = "B";
            }

            else if (percentage >= 60) {
                document.getElementById('grade').innerText = "c";
            }

            else if (percentage > 45) {
                document.getElementById('grade').innerText = "d";
            }
            else {
                document.getElementById("grade").innerText = "F";
            }
            if (percentage < 45) {
                document.getElementById('remarks').innerText = "Fail";
                document.getElementById('remarks').style.color = "red";
                document.getElementById('alert').style.display = "block";
                document.getElementById('msg').innerText = " Sorry Your are fail in exam....!";

            }
            else {
                document.getElementById('remarks').innerText = "Pass";
                document.getElementById('remarks').style.color = "green";
                document.getElementById('green').style.display = "block";
                document.getElementById('alert').innerText = "Congratulations, you passed the exam!";
            }
            document.querySelector('#math').value = "";
            document.querySelector('#eng').value = "";
            document.querySelector('#urdu').value = "";
            document.querySelector('#bio').value = "";
            document.querySelector('#chem').value = "";
        }


    }

})